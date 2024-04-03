import React from "react";
import Section, { SectionProps } from "../Section/Section";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardBodyProps,
  CardProps,
  Grid,
  GridItem,
  GridItemProps,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { transparentize } from "@chakra-ui/theme-tools";
import { useTheme } from "@emotion/react";
// import { Card, CardProps, Link } from "@saas-ui/react";

export interface HighlightBoxProps
  extends GridItemProps,
    Omit<CardBodyProps, "title"> {}
export const HighlightsItem: React.FC<HighlightBoxProps> = (props) => {
  const { children, title, ...rest } = props;
  return (
    <GridItem
      as={Card}
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="flex-start"
      spacing="8"
      overflow="hidden"
      position="relative"
      bg={useColorModeValue("white", "gray.800")}
      {...rest}
    >
      {title && (
        <Heading fontSize="3xl" mb="8">
          {title}
        </Heading>
      )}
      {children}
    </GridItem>
  );
};
export const HighlightsTestimonialItem: React.FC<
  HighlightBoxProps & TestimonialProps & { gradient: [string, string] }
> = (props) => {
  const {
    name,
    description,
    avatar,
    children,
    gradient = ["primary.500", "secondary.500"],
    ...rest
  } = props;
  const theme = useTheme();
  return (
    <HighlightsItem
      justifyContent="center"
      _dark={{ borderColor: "whiteAlpha.300" }}
      p="4"
      {...rest}
    >
      <Box
        // bgGradient={`linear(to-br, ${transparentize(
        //   gradient[0],
        //   0.8,
        // )(theme)}, ${transparentize(gradient[1], 0.8)(theme)})`}
        opacity="1"
        position="absolute"
        inset="0px"
        pointerEvents="none"
        zIndex="0"
        _dark={{ opacity: 0.5, filter: "blur(50px)" }}
      />
      <Testimonial
        name={name}
        description={<Box color="whiteAlpha.700">{description}</Box>}
        avatar={avatar}
        border="0"
        bg="transparent"
        boxShadow="none"
        color="white"
        position="relative"
      >
        {children}
      </Testimonial>
    </HighlightsItem>
  );
};
export const Highlights: React.FC<SectionProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Section
      innerWidth="container.xl"
      position="relative"
      overflow="hidden"
      {...rest}
    >
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={8}
        position="relative"
      >
        {children}
      </Grid>
    </Section>
  );
};
export interface TestimonialProps extends CardProps {
  name: string;
  description: React.ReactNode;
  avatar: string;
  href?: string;
  children: React.ReactNode;
}

export const Testimonial: React.FC<TestimonialProps> = (props) => {
  const { name, description, avatar, href, children, ...rest } = props;
  const card = (
    <Card
      avatar={<Avatar name={name} src={avatar} />}
      title={name}
      subtitle={description}
      {...rest}
    >
      <CardBody fontSize="md">{children}</CardBody>
    </Card>
  );

  if (href) {
    return <NextLink href={href}>{card}</NextLink>;
  }

  return card;
};

import { Container } from "@chakra-ui/react";
import {
  HTMLChakraProps,
  StyleProps,
  ThemingProps,
  chakra,
  omitThemingProps,
  useStyleConfig,
} from "@chakra-ui/system";
import React from "react";

export interface SectionProps
  extends HTMLChakraProps<"div">,
    ThemingProps<"Section"> {
  children: React.ReactNode;
  innerWidth?: StyleProps["width"];
}

const Section: React.FC<SectionProps> = (props) => {
  const { children, innerWidth = "container.lg", className, ...rest } = props;
  const styles = useStyleConfig("Section", rest);

  const ownProps = omitThemingProps(rest);
  return (
    <chakra.div __css={styles} {...ownProps}>
      {" "}
      <Container height="full" maxW={innerWidth}>
        {children}
      </Container>
    </chakra.div>
  );
};

export default Section;

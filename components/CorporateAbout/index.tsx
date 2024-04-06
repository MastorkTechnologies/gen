"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "../Higlight";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Tag,
  Text,
  Wrap,
  useColorModeValue,
} from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";
import { useTheme } from "@emotion/react";
import SectionHeader from "../Common/SectionHeader";
import SingleFeature from "../Features/SingleFeature";
import featuresData from "../Features/featuresData";
// import { Highlights, HighlightsItem, HighlightsTestimonialItem } from "../highlights";
// import { Box, Flex, Tag, Text, VStack, Wrap } from "@chakra-ui/react";

const CorAbout = () => {
  const approachData = [
    {
      title: "Step 1",
      description: " Understanding Your Needs      ",
    },
    {
      title: "Step 2",
      description: "Customization for Your Goals",
    },
    {
      title: "Step 3",
      description: "Seamless Delivery      ",
    },
    {
      title: "Step 4",
      description: "Continuous Assessment and Reporting      ",
    },
  ];
  const chooseData = [
    {
      icons: "",
      title: "  Flexible training formats",
      description:
        "Choose from live online, in-person, or hybrid sessions.      ",
    },
    {
      icons: "",
      title: "Tailored programs",
      description:
        "We design training initiatives aligned with your specific outcomes.",
    },
    {
      icons: "",
      title: "Cutting-edge technology",
      description:
        "Access our feature-rich Learning Management System for a seamless learning experience.      ",
    },
    {
      icons: "",
      title: "Real-time interaction",
      description:
        "Real-time interaction: Engage with industry experts during live online sessions for immediate support and clarification. ",
    },
    {
      icons: "",
      title: "Hands-on learning",
      description:
        " Learn from industry experts with practical sessions, labs, projects, and simulators.",
    },
    {
      icons: "",
      title: "Customer-Centric Approach",
      description:
        "  Your satisfaction is our top priority. We go above and beyond to provide exceptional service and support, ensuring that you are completely satisfied with the outcome.",
    },
  ];
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                {/* <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  New
                </span>{" "} */}
                Discover the power of training
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Crafting Customized Training Solutions to
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Elevate Your
                </span>
                Organization
              </h2>
              <p>
                Unlock the full potential of your workforce with our tailored
                training solutions, meticulously designed to elevate
                organizational performance and drive sustainable success
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    New Hire Training
                  </h3>
                  <p>
                    Streamline onboarding and project deployment, aligning
                    skills with business needs from day one.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Pre Hire Training
                  </h3>
                  <p>
                    Prepare fresh talent for success even before they step
                    through your doors, maximizing productivity from the start.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Executive Upskilling
                  </h3>
                  <p>
                    Streamline onboarding and project deployment, aligning
                    skills with business needs from day one.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    04
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Leadership Development
                  </h3>
                  <p>
                    Nurture future leaders and propel your organization to new
                    heights with bespoke leadership training programs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
      {/* <!-- ===== About Two Start ===== --> */}
      {/* <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Launch Your SaaS Fast
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Packed with All Essential {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  Integrations
                </span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                ultricies lacus non fermentum ultrices. Fusce consectetur le.
              </p>
              
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Know More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section> */}
      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[390px_minmax(680px,_1fr)_0px] ">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -10,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="pink col-span-4 p-8 md:col-span-1"
            >
              <div className="flex gap-3">
                {/* <Image
                  src={"/images/avatar.jpg"}
                  alt="logo"
                  width={50}
                  height={50}
                  className="h-[50px] w-[50px] rounded-[50%] object-cover"
                /> */}
                <div className="mb-10">
                  {/* <div className="text-muted text-lg text-white">
                    Renata Alink
                  </div>
                  <Text className="text-muted text-[0.8rem] text-white">
                    Founder
                  </Text> */}
                </div>
              </div>
              <Text
                color="muted"
                fontSize="lg"
                className="text-muted mb-10 text-[0.875rem] text-white"
              >
                "In the dynamic landscape of corporate training, embracing change and integrating new technologies is imperative to staying ahead. We not only leverage the most effective and established methodologies but also continually adapt and incorporate innovative tools to ensure your team remains at the forefront of industry advancements."
              </Text>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -10,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className=" col-span-4 border-0 border-black p-8 md:col-span-2"
            >
              <Heading className="mb-8 text-3xl font-semibold text-black dark:text-white">
              Discover a World of Learning: Explore Our Extensive Course Catalog
              </Heading>
              <Text
                color="muted"
                fontSize="lg"
                className="text-muted mb-10 text-[1rem]"
              >
                Embark on a Journey of Professional Growth with Comprehensive Training in a Multitude of Disciplines
              </Text>
              <Wrap mt="8">
                {[
                  "AWS",
                  "ReactJs / React Native",
                  "SAP",
                  ".Net",
                  "PHP",
                  "Web Developement",
                  "Salesforce",
                  "Six SIGMA",
                  "Azure",
                  "Cybersecurity",
                  "Quality Management",
                  "Project Management",
                  "No-Code developement",
                  "OpenAI & LLM Training",
                  "Prompt Engeinering",
                  "And Many More....",
                ].map((value) => (
                  <Tag
                    key={value}
                    variant="subtle"
                    className="rounded-full bg-purple-100 px-3 text-[0.8125rem] font-semibold text-purple-600"
                  >
                    {value}
                  </Tag>
                ))}
              </Wrap>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-25 xl:py-30 xl:pb-0">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "Our Approach              ",
              subtitle: "Tailored Solutions for Your Success",
              description: `We specialize in personalized training solutions, meticulously tailored to meet your unique needs. Through collaborative teamwork and unwavering commitment to your success, we bring expertise in empowering your team.`,
            }}
          />
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-4 xl:mt-20 xl:gap-12.5">
            {approachData.map((item, key) => {
              return (
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -10,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  key={key}
                  className="flex h-full w-full items-center justify-center"
                >
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-[50%] border p-3 shadow-solid-3 transition-all hover:shadow-solid-4 dark:bg-blacksection dark:hover:bg-hoverdark">
                    <h3 className="mb-2 mt-5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
                      {item.title}
                    </h3>
                    <p className="text-center">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
            <div></div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "BENFITS",
              subtitle: "Why Choose Genspace?",
              description: `So if you're looking for a partner who is committed to excellence, innovation, and your success, look no further than Genspace. Get in touch with us today to discuss how we can help bring your vision to life.`,
            }}
          />
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {chooseData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
          </div>
        </div>
      </section>
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2 className="mb-4 w-11/12 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
                Ready to take the next step?
              </h2>
              <p>
                Reach out to us today and let's start building something great
                together! Explore our interactive content below to learn more
                about how Genspace can help you achieve your goals.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex items-center justify-end xl:justify-between">
                <Image
                  width={299}
                  height={299}
                  src="/images/shape/shape-06.png"
                  alt="Saly"
                  className="hidden xl:block"
                />
                <a className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black">
                  Reach us
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-dark.svg"
                    alt="Arrow"
                    className="dark:hidden"
                  />
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-light.svg"
                    alt="Arrow"
                    className="hidden dark:block"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
      {/* <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with 30+ open source components.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build Saas UI on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic frontend needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            'authentication',
            'navigation',
            'crud',
            'settings',
            'multi-tenancy',
            'layouts',
            'billing',
            'a11y testing',
            'server-side rendering',
            'documentation',
            'onboarding',
            'storybooks',
            'theming',
            'upselling',
            'unit testing',
            'feature flags',
            'responsiveness',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights> */}
    </>
  );
};

export default CorAbout;

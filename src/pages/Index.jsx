import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Link, Icon, VStack, Divider, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaLeaf, FaHeart, FaEnvelope, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="brand.400" color="white">
        <Flex align="center" mr={5}>
          <Icon as={FaLeaf} h={6} w={6} mr={2} />
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Holistic Wellness
          </Heading>
        </Flex>
        <Stack direction="row" spacing={4} align="center">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#contact">Contact</Link>
        </Stack>
      </Flex>

      {/* Hero Section */}
      <Box id="home" bg="gray.100" py={20}>
        <VStack spacing={8} align="center" maxW="xl" mx="auto" px={6}>
          <Heading as="h2" size="2xl">
            Embrace Holistic Wellness
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Discover the path to optimal health and well-being through our holistic approach.
          </Text>
          <Button colorScheme="brand" size="lg" bg="brand.600" _hover={{ bg: "brand.700" }}>
            Get Started
          </Button>
        </VStack>
      </Box>

      {/* About Section */}
      <Box id="about" py={20}>
        <Flex maxW="6xl" mx="auto" px={6} direction={{ base: "column", md: "row" }}>
          <Box flex={1} mr={{ md: 10 }}>
            <Heading as="h2" size="xl" mb={4}>
              About Me
            </Heading>
            <Text fontSize="lg" mb={6}>
              Hi, I'm Sarah, a certified holistic health coach passionate about helping individuals achieve optimal wellness. With years of experience and a deep understanding of holistic principles, I guide my clients towards a balanced and fulfilling life.
            </Text>
            <Button colorScheme="brand" bg="brand.600" _hover={{ bg: "brand.700" }}>
              Learn More
            </Button>
          </Box>
          <Box flex={1}>
            <Image src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHNtaWxpbmclMjBoZWFsdGglMjBjb2FjaHxlbnwwfHx8fDE3MTEwNjA0OTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Health Coach" borderRadius="md" />
          </Box>
        </Flex>
      </Box>

      {/* Services Section */}
      <Box id="services" bg="gray.100" py={20}>
        <VStack spacing={8} align="center" maxW="6xl" mx="auto" px={6}>
          <Heading as="h2" size="xl" mb={4}>
            Health Coaching Packages
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={8}>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md" textAlign="center">
              <Icon as={FaHeart} h={12} w={12} color="brand.600" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Basic Package
              </Heading>
              <Text fontSize="lg">Get started with a personalized wellness plan.</Text>
              <Button colorScheme="brand" mt={6} bg="brand.600" _hover={{ bg: "brand.700" }}>
                Learn More
              </Button>
            </Box>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md" textAlign="center">
              <Icon as={FaLeaf} h={12} w={12} color="brand.600" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Premium Package
              </Heading>
              <Text fontSize="lg">Dive deeper into holistic wellness with advanced coaching.</Text>
              <Button colorScheme="brand" mt={6} bg="brand.600" _hover={{ bg: "brand.700" }}>
                Learn More
              </Button>
            </Box>
          </Stack>
        </VStack>
      </Box>

      {/* Blog Section */}
      <Box id="blog" py={20}>
        <VStack spacing={8} align="center" maxW="6xl" mx="auto" px={6}>
          <Heading as="h2" size="xl" mb={4}>
            Latest Blog Posts
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={8}>
            <Box bg="gray.100" p={6} borderRadius="md">
              <Image src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZHxlbnwwfHx8fDE3MTEwNjA0OTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Blog Post" borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                The Benefits of a Plant-Based Diet
              </Heading>
              <Text fontSize="lg">Discover the incredible health benefits of adopting a plant-based lifestyle.</Text>
              <Link href="#" color="brand.600" mt={4} display="block">
                Read More
              </Link>
            </Box>
            <Box bg="gray.100" p={6} borderRadius="md">
              <Image src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9ufGVufDB8fHx8MTcxMTA2MDQ5M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Blog Post" borderRadius="md" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Mindfulness Meditation for Stress Relief
              </Heading>
              <Text fontSize="lg">Learn effective mindfulness techniques to manage stress and find inner peace.</Text>
              <Link href="#" color="brand.600" mt={4} display="block">
                Read More
              </Link>
            </Box>
          </Stack>
        </VStack>
      </Box>

      {/* Contact Section */}
      <Box id="contact" bg="gray.100" py={20}>
        <VStack spacing={8} align="center" maxW="xl" mx="auto" px={6}>
          <Heading as="h2" size="xl" mb={4}>
            Contact Us
          </Heading>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md" w="100%">
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea />
              </FormControl>
              <Button colorScheme="brand" size="lg" bg="brand.600" _hover={{ bg: "brand.700" }}>
                Send Message
              </Button>
            </Stack>
          </Box>
          <Flex align="center">
            <Icon as={FaEnvelope} h={6} w={6} mr={2} />
            <Text fontSize="lg">info@holisticwellness.com</Text>
          </Flex>
          <Flex align="center">
            <Icon as={FaPhone} h={6} w={6} mr={2} />
            <Text fontSize="lg">+1 123-456-7890</Text>
          </Flex>
        </VStack>
      </Box>

      {/* Footer */}
      <Box bg="brand.400" py={10} color="white" textAlign="center">
        <Text fontSize="lg">&copy; 2023 Holistic Wellness. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;

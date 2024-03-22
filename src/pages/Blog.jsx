import React from "react";
import { Box, Heading, Text, Stack, Image, Link } from "@chakra-ui/react";

const Blog = () => {
  return (
    <Box py={20}>
      <Heading as="h1" size="2xl" mb={10} textAlign="center">
        Blog
      </Heading>
      <Stack spacing={12} maxW="6xl" mx="auto" px={6}>
        <Box>
          <Image src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZHxlbnwwfHx8fDE3MTEwNjA0OTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Blog Post" borderRadius="md" mb={4} />
          <Heading as="h2" size="xl" mb={2}>
            The Benefits of a Plant-Based Diet
          </Heading>
          <Text fontSize="lg" mb={4}>
            Discover the incredible health benefits of adopting a plant-based lifestyle. From improved digestion to reduced risk of chronic diseases, learn how a diet rich in fruits, vegetables, whole grains, and legumes can transform your well-being.
          </Text>
          <Link href="#" color="brand.600">
            Read More
          </Link>
        </Box>
        <Box>
          <Image src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9ufGVufDB8fHx8MTcxMTA2MDQ5M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Blog Post" borderRadius="md" mb={4} />
          <Heading as="h2" size="xl" mb={2}>
            Mindfulness Meditation for Stress Relief
          </Heading>
          <Text fontSize="lg" mb={4}>
            In today's fast-paced world, stress has become a constant companion for many. Discover how mindfulness meditation can help you find inner peace, reduce anxiety, and improve your overall mental well-being. Learn simple techniques you can incorporate into your daily routine.
          </Text>
          <Link href="#" color="brand.600">
            Read More
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Blog;

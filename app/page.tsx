import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Workflow from "@/components/Workflow";
import Value from "@/components/Value";
import Trust from "@/components/Trust";
import CTA from "@/components/CTA";
import BlogPreview from "@/components/BlogPreview";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const featuredPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <Impact />
      <Problem />
      <Solution />
      <Workflow />
      <Value />
      <Trust />
      <CTA />
      <BlogPreview posts={featuredPosts} />
    </>
  );
}

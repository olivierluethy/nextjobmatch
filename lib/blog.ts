export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "why-most-job-platforms-waste-your-time",
    title: "Why Most Job Platforms Waste Your Time",
    description:
      "Generic listings, weak filters, and noisy feeds: a clear-eyed look at why traditional job sites quietly drain hours from your week.",
    date: "2026-04-12",
    readingTime: "6 min read",
    category: "Job search",
    content: [
      "Open any major job platform and the experience is the same: thousands of listings, thin filters, and a feed that has no idea what you actually want. Within minutes you are scrolling past roles in the wrong city, the wrong seniority, and the wrong industry — wondering why a platform that knows your resume keeps showing them to you.",
      "The honest answer is that most job platforms are optimized for volume, not relevance. Every posting is inventory. The more inventory they show, the more impressions and clicks they can charge for. Relevance, the thing job seekers actually care about, is treated as a side effect of keyword matching.",
      "Keyword matching is a blunt tool. A senior backend engineer who writes Go gets surfaced for any role that mentions 'Go' — including ones aimed at junior developers, ones that are really about a different stack, and ones where 'Go' is just a verb in the job description. The result is a stream that looks personalized but isn't.",
      "Then there's the filter UX. You can usually narrow by location, salary, and a handful of tags, but the real signals — the kind of team you want to join, the problems you want to work on, the trade-offs you'll accept — never get a checkbox. So you do the filtering yourself, listing by listing, tab by tab.",
      "All of this adds up to a quiet but expensive tax on your time. An hour here, an hour there, and at the end of a week you've spent more time triaging noise than actually preparing for the conversations that matter. The platform got its impressions. You got tired.",
      "There's a better default. A job search tool should understand your skills and your goals deeply enough to filter the market for you — and then get out of your way. That's the bar we hold ourselves to at NextJobMatch: fewer listings, more relevance, and your time back.",
    ],
  },
  {
    slug: "how-to-find-jobs-that-actually-fit-your-skills",
    title: "How to Find Jobs That Actually Fit Your Skills",
    description:
      "A practical framework for separating fit from noise — so the roles you spend energy on are the ones genuinely worth applying to.",
    date: "2026-04-22",
    readingTime: "7 min read",
    category: "Career",
    content: [
      "Finding the right job isn't about applying to more roles. It's about applying to the right ones — and to do that, you need a clear definition of what 'right' actually means for you.",
      "Start with three lists. The first is your hard skills: languages, tools, frameworks, certifications. The second is your soft skills: how you collaborate, how you make decisions, the kind of feedback culture you thrive in. The third — and this is the one most people skip — is your goals: the kind of impact you want to have in the next two years.",
      "Once those three lists exist, every listing becomes easier to evaluate. A role that matches your hard skills but pulls you away from your goals is not a fit, even if the title and salary look right. A role that aligns with your goals but stretches a few hard skills is often a better bet than one that's a perfect match on paper.",
      "The hardest part is usually being honest about the goals list. 'Senior IC at a calm, profitable company working on infrastructure' is a useful goal. 'Anywhere good' is not. The more specific you are, the more confidently you can say no — and saying no is what protects your time.",
      "From there, the question is how to actually surface those roles. The traditional answer is filters and saved searches, but filters operate on the wrong layer. They match strings; you need to match meaning. That's where AI-driven matching changes the math: it can read a job description the way a thoughtful recruiter would, and compare it against your full profile rather than a list of keywords.",
      "The end result isn't 'more jobs.' It's a smaller, sharper list — the roles where the fit is real, the goals align, and the time you spend applying actually moves you forward.",
    ],
  },
  {
    slug: "the-future-of-ai-in-job-search",
    title: "The Future of AI in Job Search",
    description:
      "AI in the hiring loop is here to stay. The question is whether it works for the candidate or against them — and what 'good' looks like.",
    date: "2026-04-28",
    readingTime: "8 min read",
    category: "AI",
    content: [
      "AI has already changed how companies hire. Resume parsers, ranking algorithms, and automated outreach have been quietly running in the background for years. What's new is that candidates now have access to the same class of tools — and that shift is reshaping what a 'job search' even means.",
      "The first wave of candidate-side AI focused on automation: auto-apply bots, mass-tailored cover letters, scripted outreach. These tools optimize for volume, which is the same mistake the job platforms made. More applications don't lead to better outcomes; they lead to inboxes full of rejections and a search that feels increasingly out of your control.",
      "The next wave is different. Instead of automating the application, it focuses on the part of the search that humans are bad at and machines are good at: reading thousands of listings carefully and surfacing the small subset that actually fit. The candidate stays fully in the loop. The AI is a filter, not a proxy.",
      "We believe this is the right shape for the future. AI should compress the noise, not impersonate you. It should give you a shorter, better-fitting list of opportunities — and then let you read, decide, and apply on your own terms. No automatic submissions. No ghostwritten outreach. No surprises in your inbox.",
      "There are real risks to get wrong. Models can amplify bias if they're trained on bad signals. Opaque ranking can quietly hide good roles. And any system that 'applies on your behalf' can damage your reputation faster than you can audit it. The defaults matter, and transparency matters more.",
      "The job search of the next few years will look less like an endless feed and more like a focused conversation with a tool that genuinely understands what you want. Done well, it gives candidates back something the old platforms took away: time, clarity, and control.",
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

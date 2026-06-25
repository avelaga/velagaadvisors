// Mock data for the Insights blog. This will be replaced by the backend later;
// pages read through the helpers below so swapping the source is a one-file change.

export const TAGS = [
  "Portfolio Architecture",
  "Tax Strategy",
  "Direct Indexing",
  "Risk Management",
  "Estate Planning",
  "Retirement",
  "Market Commentary",
];

// When true, the first post on the list view renders as a large featured card.
export const FEATURED_FIRST = false;

const POSTS = [
  {
    id: "direct-indexing",
    title: "The Case for Direct Indexing in Concentrated Portfolios",
    tags: ["Direct Indexing", "Tax Strategy"],
    date: "March 18, 2026",
    author: "Krishna Velaga",
    authorRole: ", Founder & Chief Investment Officer",
    read: 6,
    image: null,
    excerpt:
      "Owning the index directly—rather than through a fund—turns a static allocation into a continuous source of tax efficiency. Here is how we weigh the trade-offs for families holding large, low-basis positions.",
    body: [
      { type: "lead", text: "For households carrying a large, low-basis position, the central tension is familiar: the concentration is a risk, but unwinding it triggers a tax bill that erodes the very wealth it was meant to protect." },
      { type: "p", text: "Direct indexing offers a structural answer. Rather than buying a fund that tracks an index, the portfolio holds the underlying constituents directly. The allocation looks and behaves like the index, but every individual lot becomes a lever we can manage on the family's behalf." },
      { type: "h", text: "Harvesting losses inside a rising market" },
      { type: "p", text: "Because the portfolio owns hundreds of individual securities, dispersion within the index creates opportunities even when the index itself is up. Positions that have declined can be sold to realize losses, which we then use to offset gains elsewhere—including the gradual, deliberate sale of the concentrated holding." },
      { type: "quote", text: "A client is never a number, but a family we are proud to serve—and tax efficiency is simply respect for the wealth they have built." },
      { type: "h", text: "Where direct indexing is not the answer" },
      { type: "p", text: "Direct indexing introduces operational complexity and is rarely warranted below a certain asset threshold. For many families a low-cost fund remains the more disciplined choice. The decision belongs inside a broader conversation about basis, time horizon, and the role the position plays in the household balance sheet." },
    ],
  },
  {
    id: "withdrawal-sequence",
    title: "Architecting a Tax-Aware Withdrawal Sequence in Retirement",
    tags: ["Tax Strategy", "Retirement"],
    date: "February 27, 2026",
    author: "Kalyan Cherukuri",
    authorRole: ", Chief Financial Planner",
    read: 7,
    image: null,
    excerpt:
      "The order in which accounts are drawn down can be worth more than a percentage point of return. We treat the withdrawal sequence as a multi-decade optimization, not a rule of thumb.",
    body: [
      { type: "lead", text: "Two households with identical portfolios can experience very different outcomes in retirement based on a single variable that has nothing to do with markets: the order in which they spend their accounts." },
      { type: "p", text: "Conventional guidance says to draw taxable accounts first, then tax-deferred, then Roth. It is a reasonable starting point, but treated as a rigid rule it leaves meaningful value unclaimed." },
      { type: "h", text: "Filling the lower brackets deliberately" },
      { type: "p", text: "In the years between retirement and the start of required distributions, many families occupy unusually low tax brackets. We use that window to convert tax-deferred balances to Roth at favorable rates, smoothing what would otherwise be a steep spike in taxable income later in life." },
      { type: "ul", items: [
        "Coordinate Roth conversions with capital-gains realization to manage total taxable income each year.",
        "Preserve Roth assets as the last dollars spent and the most efficient to pass on.",
        "Model required distributions a decade in advance, not the year they begin.",
      ] },
      { type: "p", text: "The sequence is not set once. We revisit it annually against actual spending, legislation, and the shape of the portfolio—because a plan that cannot adapt is not a plan." },
    ],
  },
  {
    id: "equity-hedging",
    title: "Equity Hedging: Protecting Gains Without Triggering a Sale",
    tags: ["Risk Management", "Portfolio Architecture"],
    date: "February 6, 2026",
    author: "Krishna Velaga",
    authorRole: ", Founder & Chief Investment Officer",
    read: 5,
    image: null,
    excerpt:
      "Option overlays let a family reduce downside exposure on an appreciated position while deferring the tax event a sale would create. The tool is precise—and so are its limits.",
    body: [
      { type: "lead", text: "When a single holding has grown to dominate a portfolio, the instinct to protect it is sound. The question is how to do so without surrendering a third of the gain to taxes." },
      { type: "p", text: "A carefully structured option overlay can define a floor beneath an appreciated position, limiting losses below a chosen level while the position—and its embedded gain—remains intact." },
      { type: "h", text: "Precision, not insurance" },
      { type: "p", text: "Hedging is often described as insurance, but the analogy obscures the cost. Protection has a price, paid either in premium or in forgone upside. Our work is to size that cost against the specific risk a family is trying to neutralize, rather than hedging out of reflex." },
      { type: "quote", text: "Meaningful wealth management is built on a foundation of trust, discretion, and a shared long-term perspective." },
      { type: "p", text: "An overlay is a bridge, not a destination. It buys the time to unwind a concentrated position methodically—on the family's terms and tax calendar, not the market's." },
    ],
  },
  {
    id: "portfolio-as-system",
    title: "Why We Treat a Family Portfolio Like a Technical System",
    tags: ["Portfolio Architecture"],
    date: "January 22, 2026",
    author: "Krishna Velaga",
    authorRole: ", Founder & Chief Investment Officer",
    read: 5,
    image: null,
    excerpt:
      "An engineering mindset is not a marketing line. It is a discipline of explicit assumptions, observable failure modes, and architecture that degrades gracefully under stress.",
    body: [
      { type: "lead", text: "Velaga Advisors was founded on a simple conviction: family wealth deserves the same analytical rigor as a complex technical system." },
      { type: "p", text: "Engineers do not begin with components. They begin with requirements, constraints, and the failure modes they must design around. A portfolio built the same way starts not with funds but with the family's liabilities, time horizons, and the specific stresses it must survive." },
      { type: "h", text: "Architecture that degrades gracefully" },
      { type: "p", text: "A well-designed system does not fail all at once. It is layered so that the failure of any single part is contained. We build portfolios to the same standard—diversified across genuinely independent risks, with liquidity positioned so that no market environment forces a sale at the wrong moment." },
      { type: "p", text: "This is unglamorous work. It produces no story to tell at dinner. But resilient architecture, maintained patiently over decades, is what allows a family to stay invested through the periods that matter most." },
    ],
  },
  {
    id: "estate-coordination",
    title: "Coordinating Estate and Investment Strategy Across Generations",
    tags: ["Estate Planning", "Tax Strategy"],
    date: "January 9, 2026",
    author: "Kalyan Cherukuri",
    authorRole: ", Chief Financial Planner",
    read: 6,
    image: null,
    excerpt:
      "Investment decisions and estate plans are too often built in separate rooms. Aligning them is where intergenerational wealth is preserved—or quietly lost.",
    body: [
      { type: "lead", text: "The most common failure we see in established families is not a bad investment. It is an investment strategy and an estate plan that were never introduced to one another." },
      { type: "p", text: "Decisions about which assets to hold, where to hold them, and how aggressively to grow them all carry estate consequences. Cost basis, account titling, and the location of low-basis assets determine how much wealth actually reaches the next generation." },
      { type: "h", text: "The step-up changes the calculus" },
      { type: "p", text: "Assets that receive a step-up in basis at death are frequently the worst candidates for lifetime gifting and the best candidates to hold. Coordinating that reality with a family's liquidity needs and charitable intentions is detailed work—and it is precisely the work that compounds across generations." },
      { type: "quote", text: "We partner with a limited number of households so that this coordination is continuous, not occasional." },
      { type: "p", text: "A roadmap is only useful if every part of the household's financial life is reading from the same map." },
    ],
  },
  {
    id: "volatility-discipline",
    title: "Reading Through Market Volatility: A Note on Discipline",
    tags: ["Market Commentary", "Risk Management"],
    date: "December 12, 2025",
    author: "Krishna Velaga",
    authorRole: ", Founder & Chief Investment Officer",
    read: 4,
    image: null,
    excerpt:
      "Volatility is not a malfunction of markets; it is their normal operating condition. The advantage goes to families whose architecture lets them ignore it.",
    body: [
      { type: "lead", text: "In periods of market stress, the most valuable thing an advisor can offer is often not an action but a reason to take none." },
      { type: "p", text: "Drawdowns feel like new information demanding a response. Usually they are not. A portfolio built with adequate liquidity and honest diversification was already designed to absorb them; reacting in the moment most often converts a temporary decline into a permanent loss." },
      { type: "h", text: "Discipline is structural, not emotional" },
      { type: "p", text: "We do not ask families to be stoic. We build portfolios so that stoicism is unnecessary—where near-term spending is met from stable assets, so the growth portion can be left undisturbed to do its work over years, not weeks." },
      { type: "p", text: "The discipline that matters is installed long before the volatility arrives. By the time markets are falling, the decisions that protect a family have already been made." },
    ],
  },
];

// Build the "date · author · N min read" meta line.
export function postMeta(p) {
  return `${p.date} · ${p.author} · ${p.read} min read`;
}

export function getAllPosts() {
  return POSTS;
}

export function getPost(slug) {
  return POSTS.find((p) => p.id === slug) || null;
}

export function getAllSlugs() {
  return POSTS.map((p) => p.id);
}

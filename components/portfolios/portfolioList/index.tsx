import Image from "next/image";
import Link from "next/link";

const portfolios = [
  {
    slug: "software-engineer-siemens",
    title: "Software Engineer Siemens",
    description: "Working as C++ and C# software engineer",
    employmentDate: "2022-01-12",
    coverImage:
      "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=50",
  },
];

const PortfolioItem = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {portfolios.map((portfolio) => (
      <div key={portfolio.slug} className="group relative">
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <Image
            layout="fill"
            src={portfolio.coverImage}
            alt={""}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h3 className="mt-6 text-sm text-gray-500">
          <Link legacyBehavior href={`/portfolios/${portfolio.slug}`}>
            <a>
              <span className="absolute inset-0" />
              {portfolio.title}
            </a>
          </Link>
        </h3>
        <p className="text-base font-semibold text-gray-900">
          {portfolio.description}
        </p>
      </div>
    ))}
  </div>
  )
}

export default PortfolioItem
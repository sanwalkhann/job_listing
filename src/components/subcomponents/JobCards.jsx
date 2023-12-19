export default function JobCards({ info, isLoading }) {
  const jobCard = info.map((item) => {
    const {
      id,
      company,
      logo,
      New,
      featured,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
    } = item;

    let keywords = [role, level, ...languages, ...tools];

    const keywordsBtn = keywords.map((btn, index) => {
      return (
        <div
          key={index}
          className="rounded-md bg-[var(--Light-Grayish-Cyan1)] px-2 py-1 text-[0.95rem] font-semibold text-[var(--Desaturated-Dark-Cyan)] transition dark:bg-[#004052] dark:text-[#e6e6e6c0]"
        >
          {btn}
        </div>
      );
    });
    return (
      <article
        key={id}
        className={`job-card relative ${
          New &&
          featured &&
          "border-l-[5px] border-[var(--Desaturated-Dark-Cyan)] dark:border-l-[#005066]"
        } 
          ${
            isLoading ? "invisible opacity-0" : "visible opacity-100"
          } flex  flex-col rounded-md p-5 transition-all duration-500 [box-shadow:var(--shadow)] dark:bg-[#00303d] dark:shadow-md dark:shadow-[#005066] sm:px-8 md:flex-row md:items-center md:justify-between md:gap-5`}
      >
        <div className="logo div flex items-center transition">
          <div className="fig-company absolute -top-6 pr-6 md:static">
            <img
              className="md:w-[5.5rem]"
              src={logo}
              width="50"
              height="50"
              alt={`Logo ${company}`}
              loading="lazy"
            />
          </div>
          <div className="main flex flex-col gap-1 pt-4">
            <div className="about flex flex-wrap justify-start gap-2 font-semibold capitalize">
              <div className="company pr-4 text-[1rem] text-[var(--Desaturated-Dark-Cyan)] dark:text-[#e6e6e6c0]">
                {company}
              </div>
              <div className="space-x-3 child:rounded-full child:px-2 child:pt-1 child:text-xs child:font-semibold child:uppercase child:tracking-wider child:text-white dark:child:bg-[#005066]">
                {New && (
                  <div className="inline-block bg-[var(--Desaturated-Dark-Cyan)] ">
                    new!
                  </div>
                )}
                {featured && (
                  <div className="inline-block bg-[var(--Very-Dark-Grayish-Cyan)]">
                    featured
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="position text-[1.2rem] font-bold text-[var(--Very-Dark-Grayish-Cyan)] dark:text-[#e6e6e6ef] sm:text-[1.3rem]">
                {position}
              </h2>
              <div className=" flex flex-wrap gap-2 text-[1rem] text-[var(--Dark-Grayish-Cyan)]">
                <span> {postedAt} </span> <span>•</span>
                <span> {contract} </span> <span>•</span>
                <span> {location} </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-6 mt-4 border-[var(--Dark-Grayish-Cyan)] transition md:hidden" />

        <div className="flex flex-wrap gap-4">{keywordsBtn}</div>
      </article>
    );
  });
  return jobCard;
}

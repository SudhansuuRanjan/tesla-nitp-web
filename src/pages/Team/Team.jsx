import React, { useEffect } from "react";
import './Team.scss'
import Heading from '../../components/Headings/Heading'
import TeamCard from './TeamCard'
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import { getTeamMembers } from "../../services/document";
import { useSearchParams } from "react-router-dom";
import transition from "../../utils/transition";


const Team = () => {

  const [searchParams, setSearchParams] = useSearchParams({
    year: "2020-24"
  });

  useEffect(() => {
    document.title = 'Tesla NIT Patna | Team';
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['members', searchParams.get("year")],
    queryFn: () => getTeamMembers("members", 100, 0, "Year", searchParams.get("year")),
    onSuccess: (data) => {
      // console.log(data);
    },
    staleTime: 1000 * 60 * 20,
  });

  const onClick = (e) => {
    setSearchParams(prev => {
      prev.set("year", e.target.innerText);
      return prev;
    }, { replace: true });
  }


  return (
    <div className='pt-16'>
      <Heading heading="Team"></Heading>
      <div className="flex m-auto items-center justify-center font-medium lg:text-base md:text-base text-sm lg:gap-5 md:gap-5 gap-3 flex-wrap px-8">
        <button onClick={onClick} className={`${searchParams.get("year") === "2022-26" && "bg-sky-600 text-white"} border-sky-500 border text-sky-500 transition-all delay-[40ms] ease-in-out lg:px-5 md:px-4 px-4 lg:py-2 md:py-1.5 py-1.5 rounded-xl`}>2022-26</button>
        <button onClick={onClick} className={`${searchParams.get("year") === "2021-25" && "bg-sky-600 text-white "} border-sky-500 border text-sky-500 transition-all delay-[40ms] ease-in-out lg:px-5 md:px-4 px-4 lg:py-2 md:py-1.5 py-1.5 rounded-xl`}>2021-25</button>
        <button onClick={onClick} className={`${searchParams.get("year") === "2020-24" && "bg-sky-600 text-white"} border-sky-500 border text-sky-500 transition-all delay-[40ms] ease-in-out lg:px-5 md:px-4 px-4 lg:py-2 md:py-1.5 py-1.5 rounded-xl`}>2020-24</button>
        <button onClick={onClick} className={`${searchParams.get("year") === "2019-23" && "bg-sky-600 text-white"} border-sky-500 border text-sky-500 transition-all delay-[40ms] ease-in-out lg:px-5 md:px-4 px-4 lg:py-2 md:py-1.5 py-1.5 rounded-xl`}>2019-23</button>
      </div>
      <div className='my-20 mx-5 flex flex-wrap gap-10 items-center justify-center' id='Team_main'>
        {isLoading ? <Loader></Loader> : isError ? <p>Something went wrong.</p> : data.map((member, id) => (
          <TeamCard member={member} key={id} />
        ))}
      </div>
    </div>
  )
}

export default transition(Team);
import { TrendUp } from "@phosphor-icons/react";
import { AnimatedCounter } from "react-animated-counter";
import CountUp from "react-countup";

interface StatisticsProps {
    title: string;
    value: number;
    percentage: number;
}

const Statistics = ({ title, value, percentage }: StatisticsProps) => {
    return (
        <div className="border-2 border-black/10 px-5 py-7 rounded-lg text-left flex flex-col gap-2 bg-gradient-to-br from-black/[.015] to-black/0 h-full justify-center">
            <p className="font-semibold text-2xl">
                {title}
            </p>
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    {/* <span className="text-xl font-medium">$</span> */}
                    {/* <AnimatedCounter value={value} incrementColor="#ABE423" fontSize="25px" decrementColor="#E42323" includeDecimals={false} containerStyles={{ textAlign: 'left', width: 'fit-content' }} /> */}
                    <CountUp start={0}
                        end={value}
                        duration={1.5}
                        separator=", "
                        prefix="$ "
                        suffix=""
                        className="text-2xl"
                        useEasing={true}
                        />
                </div>
                <div className="flex flex-col text-[#ABE423] items-end">
                    <p>
                        <span className="text-lg">+</span>
                        <span className="text-lg font-semibold">
                            {percentage}
                        </span><span className="text-lg"> %</span>
                    </p>
                    <TrendUp weight="duotone" size={32} />
                </div>
            </div>
        </div>
    );
}

export default Statistics;
'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Statistics from "./Statistics";
import { Area, CartesianGrid, ComposedChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Agents from "./Agents";

const Ranges = [
    'Today',
    'Yesterday',
    'This Week',
    'Last Week',
    'This Month',
    'Last Month',
    'This Year',
    'Last Year',
]

const Overview = () => {
    const [range, setRange] = useState('Today')
    const data = [
        {
            TY: 800,
            LY: 0
        },
        {
            month: 'Jan',
            TY: 500,
            LY: 900
        },
        {
            month: 'Feb',
            TY: 1000,
            LY: 1500
        },
        {
            month: 'March',
            TY: 3000,
            LY: 1000
        },
        {
            month: 'April',
            TY: 1500,
            LY: 1750
        },
        {
            TY: 2000,
            LY: 2750
        },
    ];
    return (
        <div className="w-full min-h-fit border-2 border-black/10 p-5 lg:p-10">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">
                    Overview
                </h1>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-5">
                        <span>{range}</span>
                        <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Select Range</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {Ranges.map((item, index) => {
                            return (
                                <DropdownMenuItem role="button" key={index} onClick={() => setRange(item)}>
                                    {item}
                                </DropdownMenuItem>
                            )
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="flex gap-10 mt-10 lg:flex-row flex-col">
                <div className="lg:w-6/12 flex flex-col gap-5">
                    <Statistics title="Costs Optimised" value={7265} percentage={11.02} />
                    <Statistics title="Workflows Automated" value={1321} percentage={18.04} />
                </div>
                <div className="bg-gradient-to-br from-black/[0.015] to-black/0 rounded-lg border-2 border-black/10 lg:w-6/12 px-5 py-7 flex flex-col items-center justify-center">
                    <div className="flex flex-wrap gap-5 lg:text-sm text-xs items-center justify-center">
                        <div className="flex gap-5">
                            <p className="font-bold">
                                Sales Forecast
                            </p>
                            <span className="text-black/40">Active Agents</span>
                            <span className="text-black/40">Workflows</span>
                        </div>
                        {/* <div className="text-black/40 hidden xl:block">|</div> */}
                        <ol className="list-disc list-inside flex gap-5 text-base items-center">
                            <li><span className="text-black text-xs">This Year (TY)</span></li>
                            <li className="text-[#A8C5DA]"><span className="text-black text-xs">Last Year (LY)</span></li>
                        </ol>
                    </div>
                    <ResponsiveContainer width="100%" height={250} className={'mt-10'}>
                        <ComposedChart data={data} className=" text-xs">
                            <defs>
                                <linearGradient id="colorTY" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#000000" stopOpacity={0.05} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area type="bump" dataKey="TY" stroke="#000000" fillOpacity={1} fill="url(#colorTY)" />
                            <Line type="bump" dataKey="LY" stroke="#A8C5DA" fill="#A8C5DA" strokeDasharray={'5 5'} />
                            <XAxis dataKey="month" strokeOpacity={0} />
                            <YAxis strokeOpacity={0} width={40} />
                            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#FFFFFF' }} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <Agents />
        </div>
    );
}

export default Overview;
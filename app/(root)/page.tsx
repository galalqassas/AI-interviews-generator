import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2> Get ready to your interview practicing with AI </h2>
                    <p className="text-muted-foreground">
                        Practice job interviews with AI. Get feedback on your
                        answers and improve your interview skills.
                    </p>
                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/interview">
                            <span className="flex items-center gap-2">
                                <span>Start Interview</span>
                            </span>
                        </Link>
                    </Button>
                    <span>Get Started</span>
                </div>
                <Image
                    src="/robot.png"
                    alt="robo-dude"
                    width={400}
                    height={400}
                    className="max-sm:hidden"
                />
            </section>

            <section className="flex flex-col gap-6">
                <h2> Your interviews</h2>
                <div>
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview key={interview.id}} />
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>take an interveiw</h2>
                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview key={interview.id}} />
                    ))}
                </div>
                <p>You haven&apost taken interviews yet</p>
            </section>
        </>
    );
};
export default Page;

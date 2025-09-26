import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "The Tie Media",
      period: "Apr 2025 - Jun 2025",
      positions: [
        {
          title: "UI Developer Intern",
          description: [
            "I developed multiple Flutter screens, focusing on smooth onboarding flows and user interaction. I integrated Firebase Authentication with role-based access for both users and admins. I also collaborated with designers on Figma to refactor modular Flutter widgets and created reusable components to keep the front-end clean and scalable.",
          ],
        },
      ],
    },
    {
      company: "Jubixx",
      period: "Jul 2024 - Aug 2024",
      positions: [
        {
          title: "App Development and Design Intern",
          description: [
            "I worked on designing 20+ Flutter UIs for Android, iOS, and Web workflows. I set up Firebase Cloud Firestore for real-time data sync and used Riverpod for efficient state management. Along the way, I made sure the team followed Git version control and Flutter best practices while building responsive and well-structured widgets.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/jay_headshot1.jpg",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-8 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <div className="md:hidden">
                        <h3 className="text-base font-bold">
                          {experience.company}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {experience.period}
                        </p>
                      </div>
                      <h4 className="text-lg font-semibold md:text-lg">
                        {position.title}
                      </h4>
                      <div className="space-y-2 md:space-y-3">
                        {position.description.map((desc, i) => (
                          <p
                            key={i}
                            className="text-sm text-gray-600 md:text-base"
                          >
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

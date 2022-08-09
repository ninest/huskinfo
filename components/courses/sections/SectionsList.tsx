import { activeTerms } from "@/content/terms";
import { useSections } from "@/hooks/sections";
import { Course } from "@/types/courses";
import { Debug } from "../../util/Debug";
import { Spacer } from "../../util/Spacer";
import { Section } from "./Section";

interface SectionsListProps {
  course: Course;
}

export const SectionsList = ({ course }: SectionsListProps) => {
  const { sections, isLoading } = useSections(course.sections);

  return (
    <div>
      {activeTerms.map((term) => {
        const sectionsForTerm = sections?.filter((section) => section.term === term.code);
        return (
          <section key={term.code}>
            <h3 className="font-bold text-lg">{term.description}</h3>
            <Spacer size="sm" />
            <div className="space-y-sm">
              {sectionsForTerm?.map((section, index) => (
                <Section key={index} section={section} />
              ))}
            </div>
          </section>
        );
      })}
      <Debug data={sections} />
    </div>
  );
};
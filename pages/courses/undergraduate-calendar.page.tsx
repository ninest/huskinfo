import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/Button";

const UndergraduateCalendarPage = () => {
  const calendarHref = "/files/calendar-2021-2022.pdf";

  return (
    <>
      <div className="wrapper">
        <ArticleHead
          backButtonHref="/courses"
          backButtonText="Courses"
          title="Undergraduate Calendar 2021-2022"
        ></ArticleHead>
      </div>

      <object
        className="w-full"
        style={{
          height: "calc(100vh - 10rem)",
        }}
        data={calendarHref}
        type="application/pdf"
      >
        <embed src={calendarHref} type="application/pdf" />
      </object>

      <div className="wrapper">
        <Button href={calendarHref} icon="download">
          Download
        </Button>
      </div>
    </>
  );
};

export default UndergraduateCalendarPage;
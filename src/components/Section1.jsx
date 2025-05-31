import SectionHeader from "./SectionHeader";
import DonationSection from "./DonationSection";

const Section1 = () => {
  const amountOptions = ["$5", "$15", "$30", "$45", "Other"];

  return (
    <div className="bg-white-100 p-4 rounded">
      <SectionHeader title="Section 1" />
      <div className="bg-gray-200 p-6 rounded shadow text-white space-y-4">
        <DonationSection
          label="Option 1 to Select"
          name="sec1-opt1"
          options={amountOptions}
        />
        <DonationSection
          label="Option 2 to Select"
          name="sec1-opt2"
          options={amountOptions}
        />
        <DonationSection
          label="Option 3 to Select"
          name="sec1-opt3"
          options={amountOptions}
          highlightInput={true}
        />
      </div>
    </div>
  );
};

export default Section1;

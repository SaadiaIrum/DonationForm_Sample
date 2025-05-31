import SectionHeader from "./SectionHeader";
import DonationSectionSection2 from "./DonationSection2";

const Section2 = () => {
  const amountOptions = ["$5", "$15", "$30", "$45", "Other"];

  return (
    <div className="bg-white-100 p-4 rounded">
      <SectionHeader title="Section 2" />
      <div className="bg-gray-100 p-6 rounded shadow space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <DonationSectionSection2
            label={`Option ${i + 1} to Select`}
            name={`sec2-opt${i}`}
            options={amountOptions}
          />
        ))}
      </div>
    </div>
  );
};

export default Section2;

import Image from "next/image";

const teamMembers = [
  {
    name: "Victory Emeh",
    role: "Founder and Global Executive Director",
    image: "/images/team/Victory 1.jpg",
  },
  {
    name: "Valentine Oliver",
    role: "Country Director, The Gambia.",
    image: "/images/team/Valentine 2.jpg",
  },
  {
    name: "Faith Emeh",
    role: "Resource Mobilization and Partnership Director",
    image: "/images/team/faith 3.jpg",
  },
  {
    name: "Issaka Abdulai",
    role: "Spiritual Leadership and Mentorship Director",
    image: "/images/team/Issaka 1.jpg",
  },
  {
    name: "Gloria Gimba",
    role: "Social Welfare Director",
    image: "/images/team/Gloria Gimba.jpg",
  },
  {
    name: "Procious Wokoma",
    role: "Digital and Creative Director",
    image: "/images/team/Precious 1.jpg",
  },
  {
    name: "Christian Josei",
    role: "Music/Worship Director",
    image: "/images/team/Christian 1.jpg",
  },
  {
    name: "Elizabeth Bendu",
    role: "Corporate Secretary and Compliance",
    image: "/images/team/Elizabeth-1.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="min-h-screen relative flex justify-center items-center px-4 sm:px-8 md:px-16 mt-16">
      {/* Background Art */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-75 -z-20 mt-16 max-w-[15vw] sm:max-w-none">
        <Image
          src="/images/bg arts/bg art3.png"
          alt="Background Pattern Right"
          width={160}
          height={160}
          className="w-full"
        />
      </div>
      {/* Content Container */}
      <div className="relative w-[95%] mx-auto z-20">
        <h1 className="text-xl sm:text-2xl font-bold text-primary text-left mt-8 mb-8">
          Meet Our Core Team
        </h1>
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] bg-opacity-10 rounded-2xl p-4 relative mx-auto"
              style={{
                width: "100%",
                maxWidth: "296.5px",
                height: "auto",
                aspectRatio: "296.5/348.27",
              }}
            >
              <div className="w-full h-full">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="rounded-xl object-cover object-top"
                />
                <div
                  className="absolute rounded-xl bg-gradient-to-t from-black via-black/50 to-transparent z-10"
                  style={{
                    bottom: "0",
                    left: "0",
                    right: "0",
                    height: "66%",
                  }}
                >
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-sm sm:text-base text-white font-bold relative z-20">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white italic relative z-20 min-h-[48px] line-clamp-3">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

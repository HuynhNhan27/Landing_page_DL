import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, User } from "lucide-react";

const teamMembers = [
  {
    mssv: "2310543",
    name: "Hồ Anh Dũng",
    email: "nhan.huynhgl272@hcmut.edu.vn",
  },
  {
    mssv: "2312420",
    name: "Huỳnh Đức Nhân",
    email: "nhan.huynhgl272@hcmut.edu.vn",
  },
];

export const TeamSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Thành viên nhóm
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={member.mssv}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {member.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-mono">
                  {member.mssv}
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="break-all">{member.email}</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

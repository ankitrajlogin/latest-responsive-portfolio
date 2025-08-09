import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialId?: string
  verificationUrl?: string
  skills: string[]
  description: string
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
        id: "1",
        name: "National Intellectual Property Awareness Mission (NIPAM)",
        issuer: "Intellectual Property Office, India (GOI)",
        date: "2022",
        credentialId: "",
        verificationUrl: "https://drive.google.com/file/d/15mb71cQsu5ZOR42augXSz9O1JeO7d2fK/view?usp=sharing",
        skills: [
            "Intellectual Property Rights",
            "IP Awareness",
            "Patent Filing Process",
            "Trademark Registration",
            "Copyright Laws",
            "Legal Compliance",
            "Innovation Management",
            "Government Policy",
            "Public Outreach",
            "IP Protection Strategies"
        ],
        description: "Participation in the National Intellectual Property Awareness Mission by the Intellectual Property Office, India, focusing on enhancing knowledge about IP rights, filing procedures, and protection strategies to support innovation and legal compliance."
    },
    {
        id: "2",
        name: "Android Nougat Mobile Apps Training",
        issuer: "EDUCBA",
        date: "2022",
        credentialId: "G4SR7ZS5Z",
        verificationUrl: "https://drive.google.com/drive/folders/1nVFq1cQto_1OIin7cM7k10T5LraGHiWs",
        skills: [
            "Android Development",
            "Mobile App Development",
            "Android Nougat",
            "Java",
            "UI/UX Design",
            "App Testing",
            "Debugging",
            "Mobile Software Lifecycle"
        ],
        description: "Comprehensive training on Android Nougat mobile application development covering app design, development, testing, and deployment."
    },
    {
        id: "3",
        name: "Digital Payments and Digital Currency - Challenges & Solutions for India",
        issuer: "Global Initiative of Academic Networks: GIAN",
        date: "2023",
        credentialId: "",
        verificationUrl: "https://drive.google.com/file/d/1-lMiyRhDFCvlWxCmTFaBXCFqLZWFFunk/view?usp=sharing",
        skills: [
            "5G Technology",
            "Solution Thinking",
            "Critical Thinking",
            "Digital Payments",
            "Digital Currency",
            "Blockchain Basics",
            "FinTech",
            "Cybersecurity Awareness",
            "Regulatory Compliance",
            "Innovation in Payment Systems"
        ],
        description: "Comprehensive understanding of digital payments and digital currency challenges in India, with insights into 5G-enabled solutions, blockchain applications, fintech innovations, and regulatory frameworks."
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Certifications
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise in various technologies
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-muted/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  
                  <div>
                    <CardTitle className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </CardTitle>
                    <p className="text-sm font-medium text-primary mb-2">
                      {cert.issuer}
                    </p>
                    {cert.credentialId && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>ID: {cert.credentialId}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Verification Button */}
                  {cert.verificationUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => window.open(cert.verificationUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Verify Certificate
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {certifications.length}+
            </div>
            <div className="text-sm text-muted-foreground">
              Professional Certifications
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {new Set(certifications.flatMap(cert => cert.skills)).size}+
            </div>
            <div className="text-sm text-muted-foreground">
              Validated Skills
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">
              {new Set(certifications.map(cert => cert.issuer)).size}+
            </div>
            <div className="text-sm text-muted-foreground">
              Certification Providers
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CertificationsSection
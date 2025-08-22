
import { useState } from "react";
import { Users, Mail, Phone, School, AlertCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Registration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    college: '',
    members: ['', '', '', ''],
    agreeTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMemberChange = (index: number, value: string) => {
    const newMembers = [...formData.members];
    newMembers[index] = value;
    setFormData(prev => ({
      ...prev,
      members: newMembers
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast({
        title: "Agreement Required",
        description: "Please accept the terms and conditions to register.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Registration Successful!",
        description: "Your team has been registered for Chakravyu. Check your email for confirmation.",
        variant: "default"
      });
      
      // Reset form
      setFormData({
        teamName: '',
        leaderName: '',
        leaderEmail: '',
        leaderPhone: '',
        college: '',
        members: ['', '', '', ''],
        agreeTerms: false
      });
    }, 2000);
  };

  return (
    <section id="register" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-title mb-4">Enter the Arena</h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Register your team now. Once you enter the Chakravyu, 
            there's no turning back.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card-dark">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Team Information */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center font-display">
                  <Users className="text-primary mr-2" size={24} />
                  Team Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Team Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="Enter your team name"
                      value={formData.teamName}
                      onChange={(e) => handleInputChange('teamName', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      College/University *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="Enter your institution name"
                      value={formData.college}
                      onChange={(e) => handleInputChange('college', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Team Leader Information */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center font-display">
                  <Mail className="text-primary mr-2" size={24} />
                  Team Leader Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Leader Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="Enter leader's name"
                      value={formData.leaderName}
                      onChange={(e) => handleInputChange('leaderName', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="leader@email.com"
                      value={formData.leaderEmail}
                      onChange={(e) => handleInputChange('leaderEmail', e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                      value={formData.leaderPhone}
                      onChange={(e) => handleInputChange('leaderPhone', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center font-display">
                  <Users className="text-primary mr-2" size={24} />
                  Team Members (4-6 members including leader)
                </h3>
                
                <div className="space-y-3">
                  {formData.members.map((member, index) => (
                    <input
                      key={index}
                      type="text"
                      className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder={`Member ${index + 1} name ${index < 3 ? '*' : '(optional)'}`}
                      value={member}
                      onChange={(e) => handleMemberChange(index, e.target.value)}
                      required={index < 3}
                    />
                  ))}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="border border-border rounded-lg p-4 bg-muted/50">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreeTerms}
                    onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                    className="mt-1 w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the terms and conditions, understand the risks involved, 
                    and confirm that all team members are above 18 years of age and physically fit to participate.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                } flex items-center justify-center`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Registering Team...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2" size={20} />
                    Register for Chakravyu
                  </>
                )}
              </button>

              {/* Warning Notice */}
              <div className="flex items-start space-x-3 bg-destructive/20 border border-destructive/50 rounded-lg p-4">
                <AlertCircle className="text-destructive mt-1 flex-shrink-0" size={20} />
                <div className="text-sm text-destructive">
                  <strong>Important:</strong> Registration closes 24 hours before the event. 
                  Late registrations will not be accepted. Ensure all team members are available 
                  on the event date and time.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

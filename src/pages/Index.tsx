import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { NewsSection } from "@/components/NewsSection";
import { QASection } from "@/components/QASection";
import { ContentSection } from "@/components/ContentSection";
import { IncidentsSection } from "@/components/IncidentsSection";
import { ResourcesSection } from "@/components/ResourcesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <HeroSection />
      
      <ContentSection
        id="about"
        title="About Us"
        content={`We are Ctrl+Alt Nerds — a nonprofit, anonymous, student-led collective focused on exposing the truth behind cyberwarfare in the modern world.

This isn't just about changing passwords or installing antivirus software — this is about understanding digital weapons, state-sponsored attacks, information warfare, and the silent battles happening in cyberspace every day. While governments and corporations stay quiet, we speak out.

We educate the public on how cyberattacks shape wars, destabilize economies, and manipulate truth. We simulate, decode, and dissect real-world hacks — not to spread fear, but to raise awareness. If you think you're safe because you're small, think again. If you think this war isn't your problem, it already is.

We're not your average tech club. We're the Robin Hoods of the digital realm — bringing classified knowledge to the people, not to cause destruction, but to prevent it. But mess with the public, exploit the uninformed, or wage war from the shadows — and we'll make sure the lights come on.

Ctrl+Alt Nerds — Rebooting minds. Exposing the invisible war.`}
        highlights={["Nonprofit", "Student-led", "Anonymous Collective", "Cyber Education"]}
      />

      <NewsSection />

      <ContentSection
        id="cyber-warfare"
        title="What is Cyber Warfare? and New Developments?"
        content={`As defined by the International Committee of the Red Cross (ICRC), cyber warfare refers to means and methods of warfare consisting of cyber operations that amount to, or are conducted in the context of, an armed conflict within the meaning of IHL. It involves means of violence connected with, or involving, computers and computer networks, often conducted by state actors or non-state actors with significant state direction or support.

Means and methods of war evolve over time, and are clearly not the same as the ones available when the Geneva Conventions were drafted in 1949; but IHL continues to apply to all activities conducted by parties in the course of armed conflict. Thereby cyber operation, that is reasonably expected to cause injury or death to persons or damage or destruction to objects, within the ambit of an armed conflict.

Furthermore, emerging domains of warfare include cyber, hybrid warfare, occurrences of misinformation and disinformation, Artificial Intelligence involvement and effects on Economic and Financial sectors through cyber usage.`}
        highlights={["ICRC Definition", "IHL Application", "Emerging Domains", "AI Integration"]}
      />

      <ContentSection
        id="icrc-ihl"
        title="ICRC, IHL and Cyber Warfare"
        content={`As referred by Rodenhäuser, in the view of ICRC, there exists no ambiguity regarding the applicability of IHL to cyber operations conducted during armed conflict. Accordingly, IHL governs all means and methods of warfare, emerging or traditional, used within the context of armed hostilities.

The rationale for this application stems from the notion that IHL treaties were crafted to apply to current and future technologies. This is reinforced by Article 36 of Additional Protocol I. Furthermore, Advisory Opinion on nuclear weapons, by ICJ held that IHL applies universally to all forms of warfare, including those employing yet-to-be-developed weapons systems.

Furthermore, ICRC welcomes growing recognition by States and international actors that IHL governs cyber operations in armed conflict as states are encouraged to introduce additional protections where necessary, particularly to safeguard civilian infrastructure from the adverse effects of cyber operations. However, the ICRC maintains that such efforts should serve to reinforce, not to replace the existing IHL framework. Importantly, all means and methods, whether cyber or kinetic, continue to be governed by the UN Charter and CIL, including the overarching prohibition on the use of force, which shall be discussed below.`}
        highlights={["IHL Applicability", "Article 36", "ICJ Opinion", "Civilian Protection"]}
      />

      <ContentSection
        id="legal-framework"
        title="Legal Framework Classification"
        content={`Affirming the applicability of IHL to cyber warfare the existing legal protections extend to the cyber domain. Thereby The application of IHL to cyber operations during armed conflict invokes key principles of IHL, particularly those regulating the conduct of hostilities. Central to these rules are the principles of distinction, proportionality and precautions as it equally applies to cyber operations.

Thereby IHL prohibits the use of indiscriminate cyber weapons, direct attacks on civilians or civilian objects, acts intended primarily to spread terror among the civilian population, and the principle of proportionality prohibits cyber-attacks expected to cause civilian harm that would be excessive in relation to the concrete and direct military advantage anticipated. In addition, parties must take all feasible precautions to avoid or minimize incidental civilian harm when planning and executing cyber operations. Special protections also extend to essential objects such as water systems, food supplies, and medical facilities, which must not be attacked or rendered unusable, including by digital means. Beyond armed conflict, States also have obligations during peacetime to reduce risks to civilian infrastructure from cyber threats.

Furthermore, "Martens Clause", emphasizes that even in situations not specifically regulated by treaties, civilians remain protected by the principles of humanity and public conscience.

According to Michael Schmitt, there are two basic types of conflict: international (IAC) and non-international (NIAC).

For a cyber conflict to be classified as an IAC under IHL, two key factual criteria must be met: the situation must be both "armed" and "international" in character. The 'armed' criterion is satisfied when cyber operations amount to an "attack" and cause injury to individuals or damage to objects. The 'international' criterion requires that the act be conducted by, or attributable to, a State. In the case of organized armed groups, attribution to a State requires the exercise of "overall control,". For individuals not affiliated with organized armed groups, a higher threshold applies.

The classification of a NIAC hinges on two distinct criteria: the presence of an organized armed group and a sufficient level of intensity. The organization criterion requires that the group demonstrate coordinated actions, including command structures, planning, and the ability to implement IHL. In addition, the group must also be "armed." This typically involves carrying out attacks on behalf of the group. The intensity criterion further demands that violence be protracted and exceed the threshold of internal disturbances or sporadic incidents.`}
        highlights={["IHL Principles", "Distinction", "Proportionality", "Precautions", "Martens Clause", "IAC vs NIAC"]}
      />

      <QASection />

      <IncidentsSection />

      <ContentSection
        id="issues"
        title="Issues"
        content={`Thresholds of Use of Force and Armed Attack in the Cyber Context: UN Charter prohibits the threat or use of force against the territorial integrity or political independence of any state, while permits states to use force in self-defence against an "armed attack". In the context of cyber operations, identifying what constitutes a "use of force" or an "armed attack" is complex. Physical damage, injury, or death caused by cyber means is generally accepted to meet these thresholds. However, the Tallinn Manual clarifies that even cyber operations resulting in severe functional disruption may reach the use of force threshold if their effects are comparable to kinetic attacks. Yet, ambiguity arises when cyber operations cause no direct physical harm but disrupt critical services.

Attribution of Cyber Attacks to State Actors: Attribution is a cornerstone of state responsibility under international law. Under the Articles on State Responsibility, a state is responsible for acts committed by its organs or entities acting under its direction or control. However, cyber operations often involve masked identities, false flag attacks, and proxy actors, making attribution particularly difficult. The ICRC acknowledges that reliable attribution is essential for triggering lawful responses and ensuring accountability. This undercuts the ability pursue remedies through international dispute settlement mechanisms.

Application of Principles of IHL in Interconnected Cyberspace: Applying these principles in cyberspace is challenging due to the dual-use nature of much infrastructure. Many cyber systems serve both civilian and military functions. Proportionality assessments are further complicated by the unpredictable consequences of malware. Precautionary obligations, in cyberspace, verifying such distinctions is technologically and operationally difficult. Additionally, under Article 36, states must review the legality of new weapons, including cyber capabilities. Yet, as noted in the humanitarian metadata report, few states conduct transparent Article 36 reviews of cyber tools, citing security and secrecy.

Outdated and Fragmented Domestic Legal Frameworks: Several interviewees, including Mr. Priyantha Weerasooriya and Mr. T. Kanagaraj, pointed out that Sri Lanka's domestic laws are outdated and insufficient to address the rapidly evolving landscape of cyber threats. The country lacks a centralized military cyber command and comprehensive legislative instruments that specifically deal with cyber warfare. While institutions like CERT exist, they function in a civilian capacity and often do not coordinate effectively with law enforcement or national defense agencies. Furthermore, the delay in legal recognition and approval of new technological tools severely hinders timely response to cyberattacks.`}
        highlights={["Use of Force Thresholds", "Attribution Challenges", "IHL Application", "Domestic Legal Gaps"]}
      />

      <ContentSection
        id="research"
        title="Our Research"
        content={`Clarifying and Updating IHL for Cyber Conflicts: To address legal ambiguities, several experts, including Ms. Ranatunga and Mr. Kalindu, recommended clarifying IHL definitions to explicitly include cyber operations. Key terms such as "attack," "military objective," and "destruction" should be redefined to account for non-physical impacts like economic destabilization or data loss. This would ensure that IHL applies not only to kinetic operations but also to cyberattacks that produce serious humanitarian consequences. The Tallinn Manual offers a useful starting point, but many interviewees agreed that binding legal instruments or even a new protocol - similar to a Fifth Geneva Convention - may be necessary to bring clarity and consistency.

Strengthening Domestic Legal Frameworks and Institutions: To better address national vulnerabilities, countries like Sri Lanka must develop comprehensive legal and institutional responses to cyber warfare. Interviewees like Mr. Weerasooriya and Mr. Kalubowila emphasized the need for timely legal reforms that recognize and authorize the use of modern cyber forensics tools. Establishing a centralized military cyber command, updating the Geneva Conventions Act to include Additional Protocols, and ensuring coordination between CERT and law enforcement agencies are crucial steps. Legal provisions must also be simple and understandable to the public, so as to promote wider awareness and compliance.

Creating International Attribution and Accountability Mechanisms: Given the complexity of attribution in cyberspace, several experts called for the establishment of a UN-based cyber attribution body. This institution would be responsible for investigating cyber incidents and providing impartial reports on state responsibility. The Retired Rear Admiral also suggested expanding the Rome Statute to include cyber war crimes, thereby extending the jurisdiction of the International Criminal Court (ICC) to cyberspace. Such reforms would enhance accountability and deter future violations by both state and non-state actors.

Protecting Civilian Digital Infrastructure and Data: Civilian digital infrastructure, including healthcare systems, water utilities, and even personal data repositories, must be protected as humanitarian assets. Interviewees recommended a treaty or amendment that bans cyberattacks on civilian digital systems, similar to the protections currently afforded to hospitals or schools in armed conflict. The ICRC's proposal for a "digital emblem" to mark protected systems was also endorsed as a practical step to reduce accidental targeting. Moreover, there is a growing call to recognize civilian data—especially health, identity, and legal records—as protected objects under IHL.

Encouraging Public Awareness and Business Accountability: Finally, cyber defense is not solely a state function. As Mr. Oshadha Ranasinghe pointed out, businesses hold vast amounts of sensitive data and must be held accountable for its protection. Laws mandating breach notifications, consumer protection, and corporate responsibility are essential. Public awareness campaigns can further educate individuals on cyber hygiene, helping to build a resilient society from the ground up.`}
        highlights={["IHL Clarification", "Legal Frameworks", "Attribution Mechanisms", "Civilian Protection", "Public Awareness"]}
      />

      <ResourcesSection />

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-cyber rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">C+A</span>
            </div>
            <span className="text-xl font-bold gradient-text">Ctrl+Alt Nerds</span>
          </div>
          <p className="text-muted-foreground mb-2">Rebooting minds. Exposing the invisible war.</p>
          <p className="text-sm text-muted-foreground">
            © 2024 Ctrl+Alt Nerds. A nonprofit, student-led collective dedicated to cyber warfare education.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

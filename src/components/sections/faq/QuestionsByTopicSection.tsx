import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { FaqItem } from '@/components/patterns/FaqItem';

export function QuestionsByTopicSection() {
  return (
    <section className="sec pt0" id="answers" aria-labelledby="faq-questionsbytopic-title">
      {' '}
      <div className="wrap answers">
        {' '}
        <nav className="tnav" aria-label="Topics">
          {' '}
          <a href="#t-fit" data-t="fit">
            <span className="ic">
              <Icon name="i-heartbeat" className="pi" />
            </span>
            <span>Is Autonomic Coaching Right for You?</span>
            <span className="n">8</span>
          </a>{' '}
          <a href="#t-process" data-t="process">
            <span className="ic">
              <Icon name="i-path" className="pi" />
            </span>
            <span>Inside the Coaching Process</span>
            <span className="n">7</span>
          </a>{' '}
          <a href="#t-commitment" data-t="commitment">
            <span className="ic">
              <Icon name="i-wallet" className="pi" />
            </span>
            <span>Your Commitment & Investment</span>
            <span className="n">5</span>
          </a>{' '}
          <a href="#t-medical" data-t="medical">
            <span className="ic">
              <Icon name="i-stethoscope" className="pi" />
            </span>
            <span>Medical Oversight & International Access</span>
            <span className="n">3</span>
          </a>{' '}
          <a href="#t-privacy" data-t="privacy">
            <span className="ic">
              <Icon name="i-lock-simple" className="pi" />
            </span>
            <span>Your Privacy & Personal Information</span>
            <span className="n">1</span>
          </a>{' '}
        </nav>{' '}
        <div>
          {' '}
          <div className="group" data-g="fit">
            {' '}
            <div className="g-head" id="t-fit">
              <h2 id="faq-questionsbytopic-title">Is Autonomic Coaching Right for You?</h2>
              <p>What coaching is, who it suits, and who it doesn’t.</p>
            </div>{' '}
            <div className="faq-list">
              {' '}
              <FaqItem id="fit-1" question={<>What exactly is Autonomic Coaching?</>}>
                <p>
                  It’s scientist-led, one-to-one health coaching. Justin Maguire and the team read
                  your biology, psychology, and daily life together, using your symptoms, test
                  results, and daily tracking, then turn what they find into a plan you can follow.
                  A collaborating doctor handles anything medical.
                </p>
              </FaqItem>{' '}
              <FaqItem id="fit-2" question={<>Who is it for?</>}>
                <p>
                  It’s for people whose sleep, stress, energy, digestion, or daily function has
                  slipped and who haven’t found an explanation through doctors, programs, or
                  supplements. The suitability consultation looks at your situation in detail.
                  Symptoms that need medical assessment are referred on.
                </p>
              </FaqItem>{' '}
              <FaqItem id="fit-3" question={<>Who is it not for?</>}>
                <p>
                  It isn’t for anyone who wants a diagnosis or a prescription from a coach. It also
                  doesn’t suit people after a one-off assessment, help with a single issue, or a
                  month-to-month arrangement.
                </p>
              </FaqItem>{' '}
              <FaqItem id="fit-4" question={<>Do I need a specific health condition to enroll?</>}>
                <p>
                  No. You don’t need a diagnosis. Some clients arrive with a persistent concern, and
                  others want a more structured, proactive approach to their health. If your needs
                  are better met by medical care or another service, the team will tell you.
                </p>
              </FaqItem>{' '}
              <FaqItem
                id="fit-5"
                question={<>My blood work came back “normal.” Can coaching still make sense?</>}
              >
                <p>
                  Laboratory reference ranges don&apos;t always tell the whole story of how someone
                  feels. Your intake, test results, and monitoring data are reviewed together, so
                  patterns a single test can miss have a chance to show up. No specific outcome is
                  guaranteed.
                </p>
              </FaqItem>{' '}
              <FaqItem
                id="fit-6"
                question={<>How is this different from conventional healthcare?</>}
              >
                <p>
                  Medical care and coaching do different jobs. A doctor assesses, diagnoses,
                  interprets investigations, and makes treatment decisions. Coaching turns an agreed
                  plan into daily habits and reviews your progress, looking at your physiology
                  alongside stress, relationships and environment. The two work side by side.
                </p>
              </FaqItem>{' '}
              <FaqItem id="fit-7" question={<>Is Justin a doctor?</>}>
                <p>
                  No. Justin Maguire is a scientist. He holds a BSc (Hons) in Nutritional Science
                  and a Postgraduate Diploma in Functional Blood Chemistry Analysis, and he’s
                  completing an MSc in Neuroscience and Psychology of Mental Health. He doesn’t
                  diagnose or prescribe.
                </p>
              </FaqItem>{' '}
              <FaqItem
                id="fit-8"
                question={
                  <>What if I don’t know what I need, or struggle to describe how I feel?</>
                }
              >
                <p>
                  You don’t need every answer before you start. Structured questions, your own
                  observations, and any data you have guide the conversation. If a session ever
                  feels like too much, the pace and priorities are adjusted. If coaching isn’t the
                  right fit, you may be directed to a medical consultation or another service.
                </p>
              </FaqItem>{' '}
            </div>{' '}
          </div>{' '}
          <div className="group" data-g="process">
            {' '}
            <div className="g-head" id="t-process">
              <h2>Inside the Coaching Process</h2>
              <p>From your first consultation to the monthly rhythm.</p>
            </div>{' '}
            <div className="faq-list">
              {' '}
              <FaqItem id="process-1" question={<>How do I get started?</>}>
                <p>
                  Coaching is by application. You send a short request, and the team arranges an
                  initial consultation to check suitability.
                </p>
              </FaqItem>{' '}
              <FaqItem id="process-2" question={<>What happens in the consultation?</>}>
                <p>
                  You talk through your health history, symptoms, lifestyle, and goals, supported by
                  an intake form. Afterward, you may be invited into the program, referred to
                  another service or clinician, or advised not to enroll. It helps to bring any
                  recent test results and a clear idea of the concerns you most want to address. You
                  don’t need everything organized.
                </p>
              </FaqItem>{' '}
              <FaqItem id="process-3" question={<>What happens once I’m accepted?</>}>
                <p>
                  You review and sign your contract and itemized quotation before the first session,
                  then complete the paperwork and onboarding. Your device setup and data sharing are
                  agreed at onboarding. The baseline investigative review then sets your first
                  coaching priorities.
                </p>
              </FaqItem>{' '}
              <FaqItem id="process-4" question={<>What does the program include each month?</>}>
                <ul>
                  <li>Four lifestyle coaching sessions</li>
                  <li>Two biopsychosocial coaching reviews</li>
                  <li>A dietary program, adjusted as you progress</li>
                  <li>
                    WhatsApp support, Monday to Friday, 08:00 to 17:00 CAT (acknowledged within one
                    business day, not an emergency service)
                  </li>
                </ul>
                <p>
                  Biopsychosocial reviews run on Monday or Friday and investigative reviews on
                  Wednesday. You choose a time on Calendly. All times use Central Africa Time (CAT,
                  UTC+2).
                </p>
              </FaqItem>{' '}
              <FaqItem id="process-5" question={<>What are the seven markers?</>}>
                <p>
                  At each biopsychosocial review, you score seven areas from 0 to 10: sleep and
                  recovery, calm and stress recovery, energy and daily capacity, digestion, activity
                  and exertion tolerance, mood, and participation in daily life. They’re tracking
                  tools. They aren’t diagnostic tests.
                </p>
              </FaqItem>{' '}
              <FaqItem id="process-6" question={<>Do I need new blood tests before starting?</>}>
                <p>
                  Not necessarily. Existing results can be discussed in the initial consultation.
                  Any further testing is decided by the collaborating doctor, and the testing needed
                  and its cost are explained before anything is arranged.
                </p>
              </FaqItem>{' '}
              <FaqItem id="process-7" question={<>Do I need devices?</>}>
                <p>
                  The team recommends the Oura Ring 5, FreeStyle Libre 3 Plus, and Kinsa QuickCare
                  for tracking sleep, glucose, and temperature. They aren’t included in the program
                  fee. If you already own equivalent equipment, it may work. The Libre may need
                  medical approval or a prescription where required.
                </p>
              </FaqItem>{' '}
            </div>{' '}
          </div>{' '}
          <div className="group" data-g="commitment">
            {' '}
            <div className="g-head" id="t-commitment">
              <h2>Your Commitment & Investment</h2>
              <p>Contract length, what’s included, and cancellation.</p>
            </div>{' '}
            <div className="faq-list">
              {' '}
              <FaqItem id="commitment-1" question={<>How long does the program run?</>}>
                <p>
                  You choose a 6-, 12-, or 18-month contract. New enrollment is for a fixed term,
                  not month-to-month, because changes in sleep, stress, and energy take time to show
                  up and be reviewed. Investigative reviews happen at baseline and every three
                  months:
                </p>
                <div className="ftable">
                  <table>
                    <thead>
                      <tr>
                        <th>Contract</th>
                        <th>Investigative reviews</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>6 months</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>12 months</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td>18 months</td>
                        <td>7</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </FaqItem>{' '}
              <FaqItem id="commitment-2" question={<>How much does it cost?</>}>
                <p>
                  Fees depend on the contract length and are in USD, paid upfront by EFT or bank
                  transfer, Wise, crypto, or PayPal. You receive a written, itemized quotation
                  before you enroll.
                </p>
              </FaqItem>{' '}
              <FaqItem id="commitment-3" question={<>What isn’t included in the fee?</>}>
                <p>
                  Lab panels and functional testing, supplements, prescribed medication, exercise
                  equipment or gym membership, and shipping and import fees are quoted separately.
                  Devices are bought separately. Your quotation also confirms physician fees, and
                  any extra charge needs your agreement.
                </p>
              </FaqItem>{' '}
              <FaqItem id="commitment-4" question={<>Can I cancel?</>}>
                <p>
                  Send written notice to the team. The refund is the remaining prepaid value, less a
                  cancellation charge capped at 50% of that remaining value. Where South Africa’s
                  Consumer Protection Act applies, you may cancel on 20 business days’ notice.
                </p>
              </FaqItem>{' '}
              <FaqItem id="commitment-5" question={<>Does coaching guarantee results?</>}>
                <p>
                  No. Participation supports progress, but outcomes also depend on your health,
                  circumstances, and response. No specific outcome is guaranteed.
                </p>
              </FaqItem>{' '}
            </div>{' '}
          </div>{' '}
          <div className="group" data-g="medical">
            {' '}
            <div className="g-head" id="t-medical">
              <h2>Medical Oversight & International Access</h2>
              <p>How the medical side works, and joining from outside South Africa.</p>
            </div>{' '}
            <div className="faq-list">
              {' '}
              <FaqItem id="medical-1" question={<>How does the doctor fit in?</>}>
                <p>
                  A collaborating licensed doctor handles medical assessment, diagnosis, testing
                  decisions, and prescriptions. Coaches don’t prescribe or change prescribed
                  treatment. You can request an additional telemedicine review with the doctor, and
                  physician fees are confirmed in writing before care is arranged.
                </p>
              </FaqItem>{' '}
              <FaqItem
                id="medical-2"
                question={<>Does the program include prescribed treatment?</>}
              >
                <p>
                  Not automatically. The doctor decides whether any treatment is appropriate, issues
                  the prescription, and sets the monitoring. Coaching helps with the practical side
                  of following the plan. Autonomic Coaching isn’t a pharmacy, so prescribed items
                  are dispensed by registered pharmacies. Their cost is quoted separately.
                </p>
              </FaqItem>{' '}
              <FaqItem id="medical-3" question={<>Can I join from outside South Africa?</>}>
                <p>
                  Yes. Sessions run on CAT, and the collaborating doctor is based in South Africa.
                  Clients elsewhere coordinate their care with a locally registered physician, and
                  the team will discuss options with that practitioner on request.
                </p>
              </FaqItem>{' '}
            </div>{' '}
          </div>{' '}
          <div className="group" data-g="privacy">
            {' '}
            <div className="g-head" id="t-privacy">
              <h2>Your Privacy & Personal Information</h2>
              <p>How your information is handled</p>
            </div>{' '}
            <div className="faq-list">
              {' '}
              <FaqItem id="privacy-1" question={<>How is my information handled?</>}>
                <p>
                  The team handles personal data under South Africa’s POPIA, for delivering the
                  program and coordinating with authorized care providers. Required sharing is
                  explained before you enroll, and you can withdraw optional sharing. Using your
                  identity or story in marketing requires separate permission. You can ask to
                  access, correct, or delete your information, subject to legal and clinical
                  record-keeping duties. Details are in the{' '}
                  <Link href="/privacy">Privacy Policy</Link>, and you can contact{' '}
                  <a href="mailto:justin@autonomiccoaching.com">justin@autonomiccoaching.com</a>{' '}
                  with privacy requests.
                </p>
              </FaqItem>{' '}
            </div>{' '}
          </div>{' '}
          <p className="empty" id="empty">
            0
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

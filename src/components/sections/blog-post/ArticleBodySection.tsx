import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { shareLinks } from '@/lib/share';
import { ArticleTools } from '@/components/patterns/enhance/ArticleTools';
import { SiteButton } from '@/components/ui/SiteButton';
import { SiteTextLink } from '@/components/ui/SiteTextLink';

const share = shareLinks(
  '/blog/why-do-i-still-feel-tired',
  'Why do I still feel tired after a full night’s sleep?',
);

export function ArticleBodySection() {
  return (
    <ArticleTools>
      <div className="a-body">
        {' '}
        <aside className="rail">
          {' '}
          <div className="side-author">
            {' '}
            <Image
              src="/images/justin-maguire-white-coat.png"
              alt="Justin Maguire"
              width={588}
              height={700}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />{' '}
            <div>
              <span className="k">Written by</span>
              <strong>Justin Maguire</strong>
              <span className="t">Nutritional scientist and health coach</span>
            </div>{' '}
            <p>
              Justin Maguire is a nutritional scientist and one-to-one health coach. He reads lab
              results, daily tracking and a client’s psychology together to find the patterns that
              each one misses when it’s looked at alone.
            </p>{' '}
            <SiteTextLink href="/about">
              Meet Justin <Icon name="arrow" />
            </SiteTextLink>{' '}
          </div>{' '}
          <div className="toc-wrap">
            {' '}
            <p className="toc-t">On this page</p>{' '}
            <ol className="toc" id="toc">
              {' '}
              <li>
                <a href="#familiar">Sound familiar?</a>
              </li>{' '}
              <li>
                <a href="#what">What is Responsive Living?</a>
              </li>{' '}
              <li>
                <a href="#static">Static physiology</a>
              </li>{' '}
              <li>
                <a href="#labs">“Normal” labs don’t mean you’re well</a>
              </li>{' '}
              <li>
                <a href="#fit">Who coaching is for, and who it isn’t</a>
              </li>{' '}
            </ol>{' '}
          </div>{' '}
          <div className="share">
            {' '}
            <p className="toc-t">Share</p>{' '}
            <div className="row">
              {' '}
              <button type="button" id="copyLink" aria-label="Copy link">
                <Icon name="i-link-simple" className="pi" />
              </button>{' '}
              <a
                href={share.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-share="linkedin"
                aria-label="Share on LinkedIn"
              >
                <Icon name="i-linkedin-logo" className="pi" />
              </a>{' '}
              <a
                href={share.x}
                target="_blank"
                rel="noopener noreferrer"
                data-share="x"
                aria-label="Share on X"
              >
                <Icon name="i-x-logo" className="pi" />
              </a>{' '}
              <a
                href={share.facebook}
                target="_blank"
                rel="noopener noreferrer"
                data-share="facebook"
                aria-label="Share on Facebook"
              >
                <Icon name="i-facebook-logo" className="pi" />
              </a>{' '}
              <a
                href={share.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-share="whatsapp"
                aria-label="Share on WhatsApp"
              >
                <Icon name="i-whatsapp-logo" className="pi" />
              </a>{' '}
              <a href={share.email} data-share="email" aria-label="Share by email">
                <Icon name="i-envelope-simple" className="pi" />
              </a>{' '}
            </div>{' '}
            <p className="copied" id="copied" role="status"></p>{' '}
          </div>{' '}
        </aside>{' '}
        <article className="prose">
          {' '}
          <h2 id="familiar">Sound familiar?</h2>{' '}
          <ul>
            {' '}
            <li>You sleep eight hours and wake up already tired.</li>{' '}
            <li>Your focus is gone by mid-afternoon, and more coffee only makes you jittery.</li>{' '}
            <li>You can’t switch off, even when the day is over.</li>{' '}
            <li>Every protocol you try contradicts the last one.</li>{' '}
            <li>You’ve stopped trusting your body to cope the way it used to.</li>{' '}
          </ul>{' '}
          <p className="lead-p">
            If so, there’s a reason, and it starts with a gap most of us never learn to see.
          </p>{' '}
          <h2 id="what">What is Responsive Living?</h2>{' '}
          <p>
            Responsive Living is the practice of reading your biology, your psychology, and your
            daily life together, and adjusting as each one changes. There’s a gap between what
            happens to you and how your body responds. Under constant stress, that gap closes, and
            the body stays on alert. Responsive Living widens it again.
          </p>{' '}
          <figure className="pull">
            {' '}
            <Icon name="if-quotes" className="qm" />{' '}
            <blockquote>
              “Between stimulus and response, there is a space. In that space is our power to choose
              our response. In our response lies our growth and our freedom.”
            </blockquote>{' '}
            <cite>Viktor E. Frankl</cite>{' '}
          </figure>{' '}
          <h2 id="static">Static physiology</h2>{' '}
          <p>
            For most of human history, stress was physical. You ran, fought, or hid, and the stress
            response burned itself out in the action. Today’s stress is mental: deadlines, money, a
            phone that never stops. The alarm goes off, and nothing moves. Justin Maguire calls this
            static physiology, and the book traces how a body stuck in it can stay in defense mode
            for years: tired, inflamed, and slow to recover.
          </p>{' '}
          <p>
            The book shows how this plays out in a real body, through one man’s story.{' '}
            <Link href="/responsive-living#chapter">Read the first chapter free</Link>.
          </p>{' '}
          <h2 id="labs">“Normal” labs don’t mean you’re well</h2>{' '}
          <p>
            Energy that crashes mid-afternoon. Focus that slips when it matters most. Restless
            nights, digestive issues, weight that won’t shift.
          </p>{' '}
          <div className="callout">
            <p className="statement">
              We look deeper at{' '}
              <span className="nw">
                <span className="chip">
                  <span className="ci">
                    <Icon name="i-drop-half" className="pi" />
                  </span>
                  hormones
                </span>
                ,
              </span>{' '}
              <span className="nw">
                <span className="chip">
                  <span className="ci">
                    <Icon name="i-plant" className="pi" />
                  </span>
                  gut health
                </span>
                ,
              </span>{' '}
              <span className="chip">
                <span className="ci">
                  <Icon name="i-fire" className="pi" />
                </span>
                metabolism
              </span>{' '}
              and{' '}
              <span className="chip">
                <span className="ci">
                  <Icon name="i-wave-sine" className="pi" />
                </span>
                stress patterns
              </span>{' '}
              to find what’s actually holding you back, then build a plan to fix it.
            </p>
          </div>{' '}
          <h2 id="fit">Who coaching is for, and who it isn’t</h2>{' '}
          <div className="tbl">
            {' '}
            <table>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Coaching suits you if</th>
                  <th scope="col">Coaching doesn’t suit you if</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">What you want</th>
                  <td>You want to understand why you feel the way you do, across body and mind.</td>
                  <td>You want a diagnosis or a prescription.</td>
                </tr>
                <tr>
                  <th scope="row">How you want support</th>
                  <td>You want weekly sessions over months.</td>
                  <td>You want a quick fix or a single review at one point in time.</td>
                </tr>
                <tr>
                  <th scope="row">Who decides</th>
                  <td>You want to make the decisions, using guidance based on your own data.</td>
                  <td>You’d rather be handed a fixed set of instructions.</td>
                </tr>
                <tr>
                  <th scope="row">Your situation</th>
                  <td>
                    You’re feeling unwell and want your sleep, stress, food and lab results looked
                    at together.
                  </td>
                  <td>You need urgent medical attention.</td>
                </tr>
              </tbody>
            </table>{' '}
          </div>{' '}
          <div className="cta-box">
            {' '}
            <h3>Request one-to-one coaching</h3>{' '}
            <p>
              Coaching is private and by application. Each application is reviewed before a call is
              booked.
            </p>{' '}
            <SiteButton href="#request" variant="pill">
              Request Coaching <Icon name="arrow" />
            </SiteButton>{' '}
          </div>{' '}
          <div className="tags">
            <span className="pill blue">Sleep</span>
            <span className="pill">Nervous system</span>
            <span className="pill">Lab results</span>
          </div>{' '}
        </article>{' '}
      </div>
    </ArticleTools>
  );
}

export function BrowseArticlesByTopicSection() {
  return (
    <section className="sec pt0" id="topics" aria-labelledby="blog-browsearticlesbytopic-title">
      {' '}
      <div className="wrap">
        {' '}
        <div className="topics">
          {' '}
          <div>
            {' '}
            <h2 id="blog-browsearticlesbytopic-title">Browse articles by topic</h2>{' '}
            <p className="lede">
              Articles are grouped by the questions readers bring most often. New topics are added
              as the library grows.
            </p>{' '}
          </div>{' '}
          <div className="chips" role="group" aria-label="Browse articles by topic">
            {' '}
            <button type="button" className="chip-f" data-f="all" aria-pressed="true">
              All
            </button>{' '}
            <button type="button" className="chip-f" data-f="exh" aria-pressed="false">
              Exhaustion
            </button>{' '}
            <button type="button" className="chip-f" data-f="slp" aria-pressed="false">
              Sleep
            </button>{' '}
            <button type="button" className="chip-f" data-f="hor" aria-pressed="false">
              Hormones
            </button>{' '}
            <button type="button" className="chip-f" data-f="lab" aria-pressed="false">
              Lab results
            </button>{' '}
            <button type="button" className="chip-f" data-f="gut" aria-pressed="false">
              Gut health
            </button>{' '}
            <button type="button" className="chip-f" data-f="ner" aria-pressed="false">
              Nervous system
            </button>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
}

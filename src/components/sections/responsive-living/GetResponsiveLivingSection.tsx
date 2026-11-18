export function GetResponsiveLivingSection() {
  return (
    <section
      className="sec pt0"
      id="buy"
      aria-labelledby="responsive-living-getresponsiveliving-title"
    >
      {' '}
      <div className="wrap">
        {' '}
        <div className="head shead-row">
          {' '}
          <div>
            <h2 id="responsive-living-getresponsiveliving-title">Get Responsive Living</h2>
          </div>{' '}
          <p className="lede">Ready to read the whole book?</p>{' '}
        </div>{' '}
        <div className="table-wrap buy">
          {' '}
          <table className="table">
            <thead>
              <tr>
                <th>Format</th>
                <th>Where to buy</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fmt-n">Paperback</td>
                <td>Amazon, Barnes & Noble, Target, Walmart, independent booksellers</td>
                <td className="tbd">To add</td>
              </tr>
              <tr>
                <td className="fmt-n">Kindle</td>
                <td>Amazon</td>
                <td className="tbd">To add</td>
              </tr>
              <tr>
                <td className="fmt-n">Audiobook</td>
                <td>Audible, plus Spotify and Apple</td>
                <td className="tbd">To add</td>
              </tr>
            </tbody>
          </table>{' '}
        </div>{' '}
        <p className="pub">
          Published by Golden Ray Books. ISBN 979-8-9945080-2-2 (paperback).
        </p>{' '}
      </div>{' '}
    </section>
  );
}

import PageTransition from 'components/page-transition';

function HomePage() {
  return (
    <PageTransition>
      <div className="c-small">
        <p>
          Amacım; kaliteli türkçe içeriğin az olduğu türkiye sektöründe
          globaldeki kaliteli kanallarla aynı seviyede içerikler üretebilmek ve
          sektördeki eski alışkanlıkları yenilerle değiştirerek daha iyi bir
          yere taşımasına ön ayak olmak.
        </p>
      </div>
    </PageTransition>
  );
}

export default HomePage;

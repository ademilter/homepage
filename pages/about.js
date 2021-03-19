import PageTransition from '@comp/page-transition'

function HomePage() {
  return (
    <PageTransition>
      <div className="c-sm">
        <p>
          Amacım; kaliteli türkçe içeriğin az olduğu türkiye sektöründe
          globaldeki kaliteli kanallarla aynı seviyede içerikler üretebilmek ve
          sektördeki eski alışkanlıkları yenilerle değiştirerek daha iyi bir
          yere taşımasına ön ayak olmak.
        </p>
      </div>
    </PageTransition>
  )
}

export default HomePage

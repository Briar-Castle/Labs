import downArrow from '../assets/downArrow.svg';
import './Hero.css'

export default function Hero ({ active, inProgress, archive, totalExperiments, lastUpdated }: { active: number, inProgress: number, archive: number, totalExperiments: number, lastUpdated: Date}) {
    const formattedActive = active.toString().padStart(2, "0");
    const formattedInProgress = inProgress.toString().padStart(2, "0")
    const formattedArchive = archive.toString().padStart(2, "0")
    const formattedTotalExperiments = totalExperiments.toString().padStart(3, "0")

    const formattedDate = lastUpdated.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    return (
        <>
            <div className='hero'>
                <div className='title-block'>

                    <div className='title-ribbon-alignment-box'>
                        <p className="above-title">
                            A <a href="https://briarcastle.com" className='briar-castle-link'>Briar Castle</a> Product
                        </p>
                        <h1 className="title">
                            oratory
                        </h1>
                        <div className="orange-box">
                            <h1 className='title-orange'>
                                Lab
                            </h1>
                            <div className="quick-stats">
                                <p className="quick-stats-total">
                                    {formattedTotalExperiments} <br />
                                    Experiments
                                </p>
                                <p className="quick-stats-metrics">
                                    {formattedActive} Active <br />
                                    {formattedInProgress} In Progress <br />
                                    {formattedArchive} Archived <br />
                                </p>
                                <p className="quick-stats-last-updated">
                                    Last updated <br />
                                    {formattedDate}
                                </p>
                            </div>
                        </div>  
                        <p className="below-title">
                            A serialized index for all technical projects associated with Briar Castle
                        </p>
                    </div>
                </div>
                <div className='scroll-pointer'>
                    <img src={downArrow} />
                </div>
            </div>
        </>
    )
}
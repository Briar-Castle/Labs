import { experiments } from "../lib/loadYaml";
import type { Experiment } from "../schemas/experiments";
import './Body.css';
import arrowUp from '../assets/Arrow up-right.svg';
import fileIcon from '../assets/File.svg';
import octoCat from '../assets/Github.svg';
import Info from '../assets/Info.svg';
import { useState } from "react";

export default function Body() {

    const [selectedId, setSelectedId] = useState<string>("");

    function openLink(link: string | URL) {
        window.open(link, "_blank", "noopener,noreferrer");
    }
    
    const new_experiments = [...experiments.cards].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;

        return a.order - b.order;
    });
    return (
        <>
            <div className="cards-shelf">

                {
                    new_experiments.map((experiment: Experiment) => {
                        const experimentStatus = experiment.status
                        const experimentColorCodes = {
                            active: "green",
                            inProgress: "yellow",
                            archived: "red"
                        }

                        const metadata = [
                            {
                                key: "Status",
                                value: experiment.status,
                            },
                            {
                                key: "Version",
                                value: experiment.version,
                            },
                            {
                                key: "Created",
                                value: experiment.created.toLocaleDateString() === null ? 0 : experiment.created?.toLocaleDateString(),
                            },
                            {
                                key: "Updated",
                                value: experiment.updated.toLocaleDateString(),
                            },
                            {
                                key: "Category",
                                value: experiment.category?.join(" • "),
                            },
                            {
                                key: "Topics",
                                value: experiment.topics?.join(" • "),
                            },
                            {
                                key: "Series",
                                value: experiment.series,
                            },
                            {
                                key: "Languages",
                                value: experiment.stack?.languages?.join(", "),
                            },
                            {
                                key: "Frameworks",
                                value: experiment.stack?.frameworks?.join(", "),
                            },
                            {
                                key: "Libraries",
                                value: experiment.stack?.third_party?.libraries?.join(", "),
                            },
                            {
                                key: "Bundler",
                                value: experiment.stack?.bundler,
                            },
                            {
                                key: "License",
                                value: experiment.license,
                            },
                            {
                                key: "Completion",
                                value: experiment.completion
                                    ? `${experiment.completion}%`
                                    : undefined,
                            },
                            {
                                key: "Reading Time",
                                value: experiment.reading_time
                                    ? `${experiment.reading_time} min`
                                    : undefined,
                            },
                        ].filter(item => item.value);

                        return (

                            <div className="master-card" key={experiment.id}>
                                <div className={`compact-card ${experiment.featured ? "featured" : ""}`}>

                                    <div className={`card-header ${experimentColorCodes[experimentStatus]}-head`}>
                                        <h1 className="experiment-id">{experiment.id}</h1>
                                        <h1 className="experiment-title">{experiment.name}</h1>
                                        <p className="experiment-version">{experiment.version}</p>
                                    </div>
                                    <div className={`card-body ${selectedId === experiment.id ? "show" : ""}`}>
                                        <div className="experiment-thumbnail-section">
                                            <div className="experiment-thumbnail">
                                                <img className="experiment-thumbhnail-img" src={experiment.thumbnail_img} />
                                            </div>
                                        </div>
                                        <p className="experiment-details">{experiment.description}</p>
                                        <button className="experiment-info" onClick={() => { setSelectedId(selectedId ? "" : experiment.id) }}>
                                            <img src={Info} />
                                        </button>
                                        <div className="meta-tag">
                                            {metadata.map((item) => {
                                                return (
                                                    <div className="meta-row" key={item.key}>
                                                        <span className="key">
                                                            {item.key}
                                                        </span>
                                                        <span className="value">
                                                            {item.value}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className={`src-git ${experiment.links.github.unavailable ? "no-access" : ""}`} onClick={() => openLink(experiment.links.github.link)}>
                                            <p> {experiment.links.github.name}</p>
                                            <div className="image-container">
                                                <img className="src-git-img" src={octoCat} />

                                            </div>
                                        </button>
                                        <button className={`src-docs ${experiment.links.documentation?.unavailable ? "no-access" : ""}`} onClick={() => openLink(experiment.links.documentation.link)} disabled>
                                            <p> {experiment.links.documentation.name}</p>
                                            <div className="image-container">
                                                <img className="src-docs-img" src={fileIcon} />

                                            </div>
                                        </button>
                                        <button className={`src-site ${experiment.links.website?.unavailable ? "no-access" : ""}`} onClick={() => openLink(experiment.links.website.link)}>
                                            <p> {experiment.links.website.name}</p>
                                            <div className="image-container">
                                                <img className="src-site-img" src={arrowUp} />

                                            </div>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
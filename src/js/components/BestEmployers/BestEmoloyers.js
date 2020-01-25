import React from 'react';
import SectionTitle from "../UI/Titles/SectionTitle";

const BestEmployers = () => {

    return (
        <section className={'best-employers'}>
            <div className={'container'}>
                <div>
                   <p>Porównywarka finansowa Totalmoney.pl została wyróżniona przez Kincentric tytułem:</p>
                    <SectionTitle>Najlepszy Pracodawca 2019 w Polsce!</SectionTitle>
                    <span>(Kincentric Best Employer)</span>
                    <p><strong>Kincentric Best Employers</strong> to program prowadzony i rozpoznawalny na świecie od 19 lat. Ma za zadanie wskazać firmy, które tworzą najbardziej angażujące miejsca pracy. Tytuł Najlepszego Pracodawcy jest przyznawany wyłącznie na podstawie wyników badań pracowników.</p>
                </div>
                <div>
                    <span className={'logo'}></span>

                </div>
            </div>
        </section>
    )
};

export default BestEmployers;
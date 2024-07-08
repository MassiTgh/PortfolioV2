import { ArrowRightIcon, ArrowTopRightOnSquareIcon, ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">

        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"><a href="/">Massi Tighdine</a></h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Alternant développeur full-stack</h2>
            <p className="mt-4 max-w-xs leading-normal">En recherche d&#39;une alternance de développeur full-stack de 14 mois <br />Début : Septembre 2024 <br /> Rythme : 3 semaines entreprise / 1 semaine école
            </p>

            <nav className="nav hidden lg:block">
              <ul className="mt-16 w-max">
                <li>
                  <a className="group flex items-center py-3 active" href="#about">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-s font-bold uppercase tracking-wide text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">A propos</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#formations">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-s font-bold uppercase tracking-wide text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Formations</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#experiences">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-s font-bold uppercase tracking-wide text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Expériences</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#projets">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-s font-bold uppercase tracking-wide text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projets</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-s font-bold uppercase tracking-wide text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

        {/* Liens utiles */}
          <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            <li className="mr-5 text-xs shrink-0">
                <a className="block hover:text-slate-200" href="https://github.com/MassiTgh?tab=repositories" target="_blank" rel="noreferrer noopener" aria-label="GitHub (ouvre un nouvel onglet)" title="GitHub">
                  <span className="sr-only">Lien GitHub</span>
                  <FaGithub className="h-6 w-6" aria-hidden="true"/>
                </a>
              </li>

            <li className="mr-5 text-xs shrink-0">
              <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/massinissa-tighdine-0337b1140" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" aria-hidden="true" />
              </a> 
            </li>
            
            <li className="mr-5 text-xs shrink-0">
              <a className="block hover:text-slate-200" href="" target="_blank" rel="noreferrer noopener" aria-label="Contact" title="Contact">
                <span className="sr-only">Envoyer un mail</span>
                <EnvelopeIcon className="h-6 w-6" aria-hidden="true"/>
              </a>
            </li>
          </ul>
        {/* Liens utiles */}
        </header>

        <main className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              {/* Mobile responsive */}
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">A propos</h2>
              </div>
              {/* Mobile responsive */}
              <p className="mb-4">Actuellement en formation de développeur web full-stack à la
                <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.webacademie.org/" target="_blank" rel="noreferrer noopener" aria-label="Web academie (ouvre un nouvel onglet)"> Web@cademie &#123;EPITECH&#125;</a>
                , je suis à la recherche d&#39;une alternance de 14 mois à partir de Septembre 2024. <br />
                Je suis en mesure de développer un site internet complet et souhaite développer mes compétences en Front-end 
                <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://fr.legacy.reactjs.org/" target="_blank" rel="noreferrer noopener" aria-label="React (ouvre un nouvel onglet)"> (Next.Js/ReactJS)</a>
                , développement mobile 
                <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://reactnative.dev/" target="_blank" rel="noreferrer noopener" aria-label="React Native (ouvre un nouvel onglet)"> (React Native) </a>
                ou encore en Back-end
                <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.djangoproject.com/" target="_blank" rel="noreferrer noopener" aria-label="Django (ouvre un nouvel onglet)"> (Django)</a>.<br />
                Je suis à l&#39;écoute de propositions d&#39;entretien en vue d&#39;un alternance.
              </p>
            </section>

          <section id="formations" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            {/* Mobile responsive */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Formations</h2>
            </div>
            {/* Mobile responsive */}
            <div>
              <ol>
                <li className="mb-12">
                  <a className="group relative block pb-1 transition-all sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50" href="https://www.webacademie.org/" target="_blank" rel="noreferrer noopener" aria-label="Web academie (ouvre un nouvel onglet)">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-s font-semibold -tracking-wide text-slate-500 sm:col-span-2" aria-label="2023 à 2025">2023 - 2025</header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <span className="group-hover:text-teal-300 group-focus-visible:text-teal-300 transition-colors duration-200">
                          <span className="inline-flex items-center ml-0">Développeur full-stack - EPITECH &#123;Webacademie&#125;
                            <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"/>
                          </span>
                        </span>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        Apprentissage autonome de différents languages de programmation, framework et logiciels de conception de site web en autonomie avec des deadline et contraintes données dans les sujets.                     
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="compétences développées">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Développement fron-end</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Développement back-end</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Développement mobile</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Gestion de bases de donées</div></li>
                      </ul>
                    </div>
                  </a>
                </li>
                
                <li className="mb-12">
                  <a className="group relative block pb-1 transition-all sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50" href="https://mymoniteur.fr/" target="_blank" rel="noreferrer noopener" aria-label="my moniteur (ouvre un nouvel onglet)">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-s font-semibold -tracking-wide text-slate-500 sm:col-span-2" aria-label="2021 à 2022">2021 - 2022</header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <span className="group-hover:text-teal-300 group-focus-visible:text-teal-300 transition-colors duration-200">
                          <span className="inline-flex items-center ml-0">Enseignant de la conduite - MyMoniteur
                            <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"/>
                          </span>
                        </span>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        Formation professionnelle pour l&#39;obtention d&#39;une autorisation ECSR à l&#39;aide de mise en situation comme l&#39;animation de cours de code ou de conduite.
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="compétences développées">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Enseignement</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Pédagogie</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Gestion de la relation client</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Retranscription du code de la route</div></li>
                      </ul>
                    </div>
                  </a>
                </li> 

                <li className="mb-12">
                  <a className="group relative block pb-1 transition-all sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50" href="https://lyc-agora-puteaux.ac-versailles.fr/" target="_blank" rel="noreferrer noopener" aria-label="site web lycée agora (ouvre un nouvel onglet)">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-s font-semibold -tracking-wide text-slate-500 sm:col-span-2" aria-label="2012 à 2016">2012 - 2016</header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <span className="group-hover:text-teal-300 group-focus-visible:text-teal-300 transition-colors duration-200">
                          <span className="inline-flex items-center ml-0">BAC STI2D - Lycée Agora
                            <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"/>
                          </span>
                        </span>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        Baccalauréat technologique : Sciences et technologies de l&#39;industrie et du développement durable, options SIN (Systèmes d&#39;informations et numériques)
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="compétences développées">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Gestion de projets</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Compétences de bases en programmation</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Conception et modélisation assisté par ordinateur</div></li>
                      </ul>
                    </div>
                  </a>
                </li> 
              </ol>
            </div>
          </section>

          <section id="experiences" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            {/* Mobile responsive */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experiences</h2>
            </div>
            {/* Mobile responsive */}
            <div>
              <ol className="group/list">
                <li className="mb-12">
                  <a className="group relative block pb-1 transition-all sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50" href="https://www.webacademie.org/" target="_blank" rel="noreferrer noopener" aria-label="Web academie (ouvre un nouvel onglet)">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-s font-semibold -tracking-wide text-slate-500 sm:col-span-2" aria-label="Novembre 2023 à Septembre 2024">11/2023 - 09/2024</header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <span className="group-hover:text-teal-300 group-focus-visible:text-teal-300 transition-colors duration-200">
                          <span className="inline-flex items-center ml-0">Développeur full-stack - EPITECH &#123;Webacademie&#125;
                          <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"/>
                          </span>
                        </span>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        Départ de la formation avec La Piscine (4 semaines de programmation intense) qui se poursuit avec des 9 mois de projets seul ou en groupe.
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="compétences développées">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Test unitaires</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Design de maquettes</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Cahier des charges</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Méthode agile</div></li>
                      </ul>
                    </div>
                  </a>
                </li>
                
                <li className="mb-12">
                  <a className="group relative block pb-1 transition-all sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50" href="https://maison-permis.fr/" target="_blank" rel="noreferrer noopener" aria-label="lien vers le site maison du permis (ouvre un nouvel onglet)">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-s font-semibold -tracking-wide text-slate-500 sm:col-span-2" aria-label="2022 à 2023">2022 - 2023</header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <span className="group-hover:text-teal-300 group-focus-visible:text-teal-300 transition-colors duration-200">
                          <span className="inline-flex items-center ml-0">Enseignant de la conduite - Maison du permis
                            <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"/>
                          </span>
                        </span>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                      Accompagnement des élèves de leurs premières heures de conduite à leur passage de l’examen de conduite
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="compétences développées">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Gestion du stress</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Patience et capacités d&#39;adaptation</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Connaissances mécanique d&#39;un véhicule</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Bon sens de l&#39;observation</div></li>
                      </ul>
                    </div>
                  </a>
                </li>  

                <li className="mb-12">
                  <a className="group relative block pb-1 transition-all sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50" href="https://www.linkedin.com/company/activcom.fr/" target="_blank" rel="noreferrer noopener" aria-label="lien vers LinkedIn Activcom (ouvre un nouvel onglet)">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-s font-semibold -tracking-wide text-slate-500 sm:col-span-2" aria-label="Février 2018 à Mai 2018">02/2018 - 06/2018</header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <span className="group-hover:text-teal-300 group-focus-visible:text-teal-300 transition-colors duration-200">
                          <span className="inline-flex items-center ml-0">Commercial - Activcom
                            <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"/>
                          </span>
                        </span>
                      </h3>
                      <p className="mt-2 text-sm leading-normal">
                        Prospection commercial auprès de particulier et professionnels afin de leur proposer les offres les plus compétitives par rapport à leur besoin.
                      </p>
                      <ul className="mt-2 flex flex-wrap" aria-label="compétences développées">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Gestion d&#39;un porte feuille client</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Travail en équipe</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Sens de la communication</div></li>
                      </ul>
                    </div>
                  </a>
                </li>      
              </ol>
            </div>
            {/* Lien vers CV */}
            <div className="mt-12">
              <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="./CV.pdf" target="_blank" rel="noreferrer noopener" aria-label="lien ver le CV (ouvre un nouvel onglet)">
                <span>Voir le <span className="inline-flex items-center">CV
                  <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none ml-1" aria-hidden="true" />
                  </span>
                </span>
              </a>
            </div>
            {/* Lien vers CV */}
          </section>

          <section id="projets" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            {/* Mobile responsive */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projets</h2>
            </div>
            {/* Mobile responsive */}
            <ol className="group/list">
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/MassiTgh/ProjetsWAC" target="_blank" rel="noreferrer noopener" aria-label="Lien vers projet (ouvre un nouvel onglet)">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span className="inline-flex items-center ml-0">Puissance 4
                          <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"/>
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">Projet consistant à reproduire le jeu de plateau classique Puissance 4 en tant que module JavaScript. Le module JavaScript pourra alors être importé et utilisé dans un autre fichier JavaScript, ce qui permettra d&#39;intégrer facilement le jeu dans diverses applications web. </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="langages utilisés">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Modules JavaScript</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">POO en JavaScript</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Plugin JavaScript</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">HTML5/CSS3</div></li>
                    </ul>
                  </div>
                  <Image alt="En maintenance" loading="lazy" width={200} height={48} decoding="async" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" src="" />
                  </div>
              </li>

              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/MassiTgh/ProjetsWAC" target="_blank" rel="noreferrer noopener" aria-label="Lien vers projet (ouvre un nouvel onglet)">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span className="inline-flex items-center ml-0">My Cinema
                          <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"/>
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">Création d&#39;un site web pour un cinéma avec une partie utilisateur/client et une partie admin permettant d&#39;ajouter et supprimer des films à l&#39;affiche (parmis ceux présent dans la base de donées)</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="langages utilisés">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">HTML5/CSS3</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">PHP</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">MySql</div></li>
                    </ul>
                  </div>
                  <Image alt="En maintenance" loading="lazy" width={200} height={48} decoding="async" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" src="" />
                </div>
              </li>

              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/MassiTgh/ProjetsWAC" target="_blank" rel="noreferrer noopener" aria-label="Lien vers projet (ouvre un nouvel onglet)">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span className="inline-flex items-center ml-0">My Meetic
                          <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"/>
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">Création d&#39;un site de rencontre inspiré du site &#34;Meetic&#34; pour consolider les stack HTML/CSS et PHP avec l&#39;ajout de resctriction comme l&#39;utilisation de POO (Programmation orientée objet) en PHP et l&#39;implémentation d&#39;un carousselle pour l&#39;affichage des autres membres</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="langages utilisés">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">PHP POO </div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">HTML5/CSS3</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">JavaScript</div></li>
                    </ul>
                  </div>
                  <Image alt="En maintenance" loading="lazy" width={200} height={48} decoding="async" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" src="" />
                </div>
              </li>

              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/MassiTgh/ProjetsWAC" target="_blank" rel="noreferrer noopener" aria-label="Lien vers projet (ouvre un nouvel onglet)">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span className="inline-flex items-center ml-0">Spotify
                          <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"/>
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">Initiation au framework React avec l&#39;appel et affichage d&#39;une API pour l&#39;utilisateur</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="langages utilisés">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">HTML5/CSS3</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">ReactJs</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Node.Js</div></li>
                    </ul>
                  </div>
                  <Image alt="Screen Spotify" loading="lazy" width={200} height={48} decoding="async" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" src="/spotify.png" />
                </div>
              </li>

              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/MassiTgh/Multilang_site" target="_blank" rel="noreferrer noopener" aria-label="Lien vers projet (ouvre un nouvel onglet)">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span className="inline-flex items-center ml-0">Blog
                          <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"/>
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">Projet personnel de création d&#39;un blog multilingue (i18n) sur un nouveau framework (Django)</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="langages utilisés">
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Python</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">SQLite</div></li>
                        <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Pip</div></li>
                    </ul>
                  </div>
                  <Image alt="Implémentation du CSS en cour" loading="lazy" width={200} height={48} decoding="async" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" src="" />
                </div>
              </li>
            </ol>
            {/* Lien vers repo Github */}
            <div className="mt-12">
              <a className="inline-flex items-center leading-tight font-semibold text-slate-200 group" href="/Projets" aria-label="Voir tous les projets">
                <span>
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Voir tous les projets</span>
                  <span className="whitespace-nowrap">
                    <ArrowRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"/>
                  </span>
                </span>
              </a>
            </div>
            {/* Lien vers repo Github */}
          </section>

          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
              Codé sur <a href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Visual Studio Code (ouvre un nouvel onglet)">Visual Studio Code
              </a>. Avec les framework <a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Next.js (ouvre un nouvel onglet)">Next.js
              </a> et <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Tailwind CSS (ouvre un nouvel onglet)">Tailwind CSS
              </a>, déployé grâce à <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Vercel (ouvre un nouvel onglet)">Vercel
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

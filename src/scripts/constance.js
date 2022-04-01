const publications = [
  {
    image:
      "./images/publications/publication_Topic-driven Ensemble for Online Advertising Generation.png",
    title: "Topic-driven Ensemble for Online Advertising Generation",
    authors:
      "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
    text: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basi…",
  },
  {
    image:
      "./images/publications/publication_Convolutional neural networks with hierarchical context transfe….png",
    title: "Convolutional neural networks with hierarchical context transfe…",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    text: "In this work, we consider a problem of predicting the next state of a given area using retrospective information. The proposed concept of hierarchical context transfer (HCT) operates on several spatial levels of the input data to overcome major issues of next state prediction problems - density variability, a sig…",
  },
  {
    image:
      "./images/publications/publication_Spatiotemporal Filtering Pipeline for Efficient Social Networks Dat….png",
    title:
      "Spatiotemporal Filtering Pipeline for Efficient Social Networks Dat…",
    authors: "Ksenia Mukhina, Alexander Visheratin, Denis Nasonov",
    text: "One of the areas that gathers momentum is the investigation of location-based social networks (LBSNs) because the understanding of citizens’ behavior on various scales can help to improve quality of living, enhance urban management, and advance the development of smart cities. But it is widely known that the…",
  },
  {
    image:
      "./images/publications/publication_Hybrid evolutionary workflow scheduling algorithm for dynami.png",
    title: "Hybrid Intellectual Scheme for Scheduling of Heterogeneous Wo…",
    authors: "Mikhail Melnik, Ivan Dolgov, Denis Nasonov",
    text: "Scheduling of workload in distributed computing systems is a well-known optimization proble. A workload may include single independent software packages. However, the computational process in scientific and industrial fields is often organized as compos…",
  },
  {
    image:
      "./images/publications/publication_Detection of housing and utility problems in districts through soc.png",
    title:
      "Detection of housing and utility problems in districts through soc…",
    authors: "Alexandr Zamiralov, Maria Khodorchenko, Denis Nasonov",
    text: "Social media stores a significant amount of information which can be used for extraction of specific knowledge. A variety of topics that arise there concerns a lot of everyday life aspects, including urban-related problems. In this work, we demonstrate the way of using the texts from social media on the topic of ho…",
  },
  {
    image:
      "./images/publications/publication_Decoupling graph convolutional networks for large-scale supervis….png",
    title: "Decoupling graph convolutional networks for large-scale supervis…",
    authors: "Mariia Koreneva, Alexander A Visheratin, Denis Nasonov",
    text: "We present a new approach to large-scale supervised heterogeneous graph classification. We decouple a large heterogeneous graph into smaller homogeneous ones. In this paper, we show that our model provides results close to the state-of-the-art model while greatly simplifying calculations and makes it possible…",
  },
  {
    image:
      "./images/publications/publication_Peregreen–modular database for efficient storage of historical tim….png",
    title:
      "Peregreen–modular database for efficient storage of historical tim…",
    authors:
      "Alexander Visheratin, Alexey Struckov, Semen Yufa, Alexey Muratov, Denis Nasonov, Nikolay B…",
    text: "The rapid development of scientific and industrial areas, which rely on time series data processing, raises the demand for storage that would be able to process tens and hundreds of terabytes of data efficiently. And by efficiency, one should understand not only the speed of data processing operations execution but als…",
  },
  {
    image:
      "./images/publications/publication_Intelligent sightseeing in immensely manifold cities.png",
    title: "Intelligent sightseeing in immensely manifold cities: Case …",
    authors:
      "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov, Lev Manovich",
    text: "In this work, we show how social media data can be used for the improvement of touristic experience. We present an algorithm for automated touristic paths construction. Score function for location depends on three components: location's social media popularity and rating, distances of place from others in r…",
  },
  {
    image:
      "./images/publications/publication_User Profiles Matching for Different Social Networks Based.png",
    title: "User Profiles Matching for Different Social Networks Based …",
    authors: "Timur Sokhin, Nikolay Butakov, Denis Nasonov",
    text: "It is common practice nowadays to use multiple social networks for different social roles. Although this, these networks assume differences in content type, communications and style of speech. If we intend to understand human behaviour as a key-feature for recommender systems, banking risk assessm…",
  },
  {
    image:
      "./images/publications/publication_Orienteering Problem with Functional Profits for multi-sourc.png",
    title: "Orienteering Problem with Functional Profits for multi-sourc…",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    text: "Orienteering problem (OP) is a routing problem, where the aim is to generate a path through set of nodes, which would maximize total score and would not exceed the budget. In this paper, we present an extension of classic OP—Orienteering Problem with Functional Profits (OPFP), where the score of …",
  },
  {
    image:
      "./images/publications/publication_Intelligent sightseeing in immensely manifold cities.png",
    title: "Intellectual Execution Scheme of Iterative Computational Models …",
    authors: "Mikhail Melnik, Denis A Nasonov, Alexey Liniov",
    text: "In the modern world, with the growth of the volume of processed data arrays, the logic of solving problems also becomes more complex. This leads more and more often to the need to use high-performance computational clusters, such as supercomputers. Created m…",
  },
  {
    image:
      "./images/publications/publication_Urban events prediction via convolutional neural networks a….png",
    title: "Urban events prediction via convolutional neural networks a…",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    text: "In today’s world, it is crucial to be proactive and be prepared for events which are not happening yet. Thus, there is no surprise that in the field of social media analysis the research agenda has moved from the development of event detection methods to a brand new area - event prediction models...",
  },
];

const publicationsSection = document.querySelector(".page__publications");
const cards = publicationsSection.querySelector(".cards");
const cardTemplate = document.querySelector("#cardPublication").content;

export { publications, cards, cardTemplate };

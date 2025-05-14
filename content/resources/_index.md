---
title: Resources
toc: true
weight: 40
---

<link rel="stylesheet" href="/css/resource-search.css">

### Overview

This list provides resources relevant to BBQS projects and working groups. These resources include pre-trained models, datasets, tools, and papers that support the consortia and its goals.

<div class="resource-search-container">
  <div class="search-input-wrapper">
    <input type="text" id="resource-search" placeholder="Search resources by keyword, category, or animal...">
    <button id="clear-search">✕</button>
  </div>
  <p id="no-results-message">No matching resources found. Try a different search term.</p>
</div>

<div class="resource-list">

### General Tools

<div class="resource-item" data-categories="entity tracking" data-animals="Multi-Animal">
  <h4><a href="https://idtracker.ai/latest/">idtracker.ai</a></h4>
  <p>Open-source multi-animal tracking software that can identify and track up to 100 unmarked animals in video, maintaining individual identities throughout the recording.​</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="entity tracking"">Entity Tracking</span>
    <span class="animal-pill" data-animal="multi-animal">Multi-Animal</span>
  </div>
</div>

<div class="resource-item" data-categories="behavioral analysis" data-animals="Multi-Animal">
  <h4><a href="https://github.com/sgoldenlab/simba?tab=readme-ov-file">SimBA - Simple Behavioral Analysis</a></h4>
  <p>Open-source pipeline and GUI for developing supervised behavioral classifiers. Supports DLC, DeepPoseKit, SLEAP, MARS and others.​</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="behavioral analysis">Behavioral Analysis</span>
    <span class="animal-pill" data-animal="multi-animal">Multi-Animal</span>
  </div>
</div>

<div class="resource-item" data-categories="data collection" data-animals="">
  <h4><a href="https://open-ephys.org/bonsai">Bonsai</a></h4>
  <p>Visual programming language for synchronizing and processing heterogeneous data streams in real time</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="data collection">Data Collection</span>
  </div>
</div>

<div class="resource-item" data-categories="data collection" data-animals="">
  <h4><a href="labstreaminglayer.org">LabStreamingLayer (LSL)</a></h4>
  <p>Middleware framework for streaming and synchronizing multiple data sources (e.g. EEG, motion tracking, video, etc.) over a network.​</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="data collection">Data Collection</span>
  </div>
</div>

<div class="resource-item" data-categories="experimental design,hardware" data-animals="">
  <h4><a href="https://open-ephys.org/">Open Ephys</a></h4>
  <p>Open-source platform for electrophysiology hardware and software.​</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="experimental design">Experimental Design</span>
    <span class="category-pill" data-category="hardware">Hardware</span>
  </div>
</div>

### Models

<div class="resource-item" data-categories="pose estimation,model" data-animals="quadruped">
  <h4><a href="https://huggingface.co/mwmathis/DeepLabCutModelZoo-SuperAnimal-Quadruped">DLC SuperAnimal-Quadruped</a></h4>
  <p>DeepLabCut pre-trained model supporting quadruped animals.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="pose estimation">Pose Estimation</span>
    <span class="category-pill" data-category="model">Model</span>
    <span class="animal-pill" data-animal="quadruped">Quadruped</span>
  </div>
</div>

<div class="resource-item" data-categories="pose estimation,model" data-animals="mouse">
  <h4><a href="https://huggingface.co/mwmathis/DeepLabCutModelZoo-SuperAnimal-TopViewMouse">DLC SuperAnimal-TopViewMouse</a></h4>
  <p>DeepLabCut pre-trained model supporting overhead mouse data.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="pose estimation">Pose Estimation</span>
    <span class="category-pill" data-category="model">Model</span>
    <span class="animal-pill" data-animal="mouse">Mouse</span>
  </div>
</div>

<div class="resource-item" data-categories="pose estimation,model" data-animals="bird">
  <h4><a href="https://huggingface.co/DeepLabCut/DeepLabCutModelZoo-SuperAnimal-Bird">DLC SuperAnimal-Bird</a></h4>
  <p>DeepLabCut pre-trained model for birds.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="pose estimation">Pose Estimation</span>
    <span class="category-pill" data-category="model">Model</span>
    <span class="animal-pill" data-animal="bird">Bird</span>
  </div>
</div>

<div class="resource-item" data-categories="pose estimation,model" data-animals="human">
  <h4><a href="https://huggingface.co/mwmathis/DeepLabCutModelZoo-DLC_human_fullbody_resnet_101">DLC Full Human Body</a></h4>
  <p>DeepLabCut pre-trained model for full human body pose estimation.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="pose estimation">Pose Estimation</span>
    <span class="category-pill" data-category="model">Model</span>
    <span class="animal-pill" data-animal="human">Human</span>
  </div>
</div>

<div class="resource-item" data-categories="pose estimation,model" data-animals="macaque,primate">
  <h4><a href="https://huggingface.co/mwmathis/DeepLabCutModelZoo-macaque_full">DLC Macaque</a></h4>
  <p>DeepLabCut pre-trained model for macaques.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="pose estimation">Pose Estimation</span>
    <span class="category-pill" data-category="model">Model</span>
    <span class="animal-pill" data-animal="macaque">Macaque</span>
    <span class="animal-pill" data-animal="primate">Primate</span>
  </div>
</div>

<div class="resource-item" data-categories="pose estimation,model" data-animals="primate">
  <h4><a href="https://huggingface.co/mwmathis/DeepLabCutModelZoo-primate_face">DLC Primate Face</a></h4>
  <p>DeepLabCut pre-trained model for primate facial pose estimation.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="pose estimation">Pose Estimation</span>
    <span class="category-pill" data-category="model">Model</span>
    <span class="animal-pill" data-animal="primate">Primate</span>
  </div>
</div>

<div class="resource-item" data-categories="pose estimation,model" data-animals="horse">
  <h4><a href="https://huggingface.co/mwmathis/DeepLabCutModelZoo-horse_sideview">DLC Horse Sideview</a></h4>
  <p>DeepLabCut pre-trained model for horse sideview pose estimation.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="pose estimation">Pose Estimation</span>
    <span class="category-pill" data-category="model">Model</span>
    <span class="animal-pill" data-animal="horse">Horse</span>
  </div>
</div>

<div class="resource-item" data-categories="pose estimation,model" data-animals="mouse">
  <h4><a href="https://huggingface.co/mwmathis/DeepLabCutModelZoo-mouse_pupil_vclose/tree/main">DLC Mouse Pupil</a></h4>
  <p>DeepLabCut pre-trained model for tracking mouse pupil movements.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="pose estimation">Pose Estimation</span>
    <span class="category-pill" data-category="model">Model</span>
    <span class="animal-pill" data-animal="mouse">Mouse</span>
  </div>
</div>

<div class="resource-item" data-categories="neural,data analysis,model" data-animals="">
  <h4><a href="https://cebra.ai/">CEBRA: Consistent EmBeddings of high-dimensional Recordings using Auxiliary variables</a></h4>
  <p>Machine-learning method that can be used to compress time series in a way that reveals otherwise hidden structures in the variability of the data</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="neural">Neural Data</span>
    <span class="category-pill" data-category="data analysis">Data Analysis</span>
  </div>
</div>


### Benchmarks and Datasets

<div class="resource-item" data-categories="dataset" data-animals="quadruped">
  <h4><a href="https://zenodo.org/records/10619173"> SuperAnimal-Quadruped-80K</a></h4>
  <p>Dataset aggregating quadruped animal images.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="dataset">Dataset</span>
    <span class="animal-pill" data-animal="quadruped">Quadruped</span>
  </div>
</div>

<div class="resource-item" data-categories="dataset" data-animals="mouse">
  <h4><a href="https://zenodo.org/records/10618947"> SuperAnimal-TopViewMouse-5K</a></h4>
  <p>Dataset aggregating top-view mouse images.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="dataset">Dataset</span>
    <span class="animal-pill" data-animal="mouse">Mouse</span>
  </div>
</div>

<div class="resource-item" data-categories="benchmark,dataset" data-animals="mouse,marmoset,fish,horse">
  <h4><a href="https://benchmark.deeplabcut.org/datasets.html"> DeepLabCut Benchmarks</a></h4>
  <p>Various benchmarks for animal pose estimation including TRI-MOUSE, PARENTING-MOUSE, MARMOSETS, FISH, HORSE-30.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="benchmark">Benchmark</span>
    <span class="category-pill" data-category="dataset">Dataset</span>
    <span class="animal-pill" data-animal="mouse">Mouse</span>
    <span class="animal-pill" data-animal="marmoset">Marmoset</span>
    <span class="animal-pill" data-animal="fish">Fish</span>
    <span class="animal-pill" data-animal="horse">Horse</span>
  </div>
</div>


### Leaderboards

<div class="resource-item" data-categories="leaderboard,pose estimation" data-animals="">
  <h4><a href="https://paperswithcode.com/task/animal-pose-estimation">Animal Pose Estimation Leaderboard</a></h4>
  <p>Comparative leaderboard for animal pose estimation methods.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="leaderboard">Leaderboard</span>
    <span class="category-pill" data-category="pose estimation">Pose Estimation</span>
  </div>
</div>

<div class="resource-item" data-categories="leaderboard,pose estimation" data-animals="">
  <h4><a href="https://benchmark.deeplabcut.org/">DeepLabCut Leaderboard</a></h4>
  <p>Comparative leaderboard for DLC benchmarks.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="leaderboard">Leaderboard</span>
    <span class="category-pill" data-category="pose estimation">Pose Estimation</span>
  </div>
</div>

### Papers and Protocols

<div class="resource-item" data-categories="paper,protocol,pose estimation" data-animals="">
  <h4><a href="https://www.nature.com/articles/s41467-024-48792-2">Using DeepLabCut for 3D Markerless Pose Estimation</a></h4>
  <p>Guidance on DLC for 3D pose estimation.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="paper">Paper</span>
    <span class="category-pill" data-category="protocol">Protocol</span>
    <span class="category-pill" data-category="pose estimation">Pose Estimation</span>
  </div>
</div>

<div class="resource-item" data-categories="paper,pose estimation" data-animals="">
  <h4><a href="https://www.nature.com/articles/s41467-024-48792-2">DeepLabCut: Markerless Pose Estimation</a></h4>
  <p>Foundational paper on DLC technology.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="paper">Paper</span>
    <span class="category-pill" data-category="pose estimation">Pose Estimation</span>
  </div>
</div>

<div class="resource-item" data-categories="paper,pose estimation" data-animals="human">
  <h4><a href="https://arxiv.org/abs/1605.03170">DeeperCut: Multi-person Pose Estimation</a></h4>
  <p>High-performance multi-person pose estimation.</p>
  <div class="resource-tags">
    <span class="category-pill" data-category="paper">Paper</span>
    <span class="category-pill" data-category="pose estimation">Pose Estimation</span>
    <span class="animal-pill" data-animal="human">Human</span>
  </div>
</div>

</div>

### Contribution
To add resources or update existing entries, please reach out to the BBQS team or submit via our [GitHub repository](#).

### Future Plans
We are working on integrating a chatbot that will connect to a database of JSON-organized resources, making it even easier to find the information you need. We are also working on an ingestion tool that will make it easier to add and update entries! Stay tuned for updates.

<script src="/js/resource-search.js"></script>
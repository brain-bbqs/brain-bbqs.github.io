---
title: Resources
toc: true
weight: 40
---

<link rel="stylesheet" href="/css/resource-search.css">

### Overview

This page provides a curated collection of resources relevant to BBQS projects and working groups. You'll find software tools and libraries for analysis, pre-trained AI/ML models, behavioral and neural datasets, evaluation benchmarks, academic publications, data platforms, and standards for consistent data sharing. Use the search below to filter resources by keywords, categories, target species, or working groups.

<div class="resource-search-container">
  <div class="search-input-wrapper">
    <input type="text" id="resource-search" placeholder="Search resources by keyword, category, or animal...">
    <button id="clear-search">✕</button>
  </div>
  <p id="no-results-message">No matching resources found. Try a different search term.</p>
</div>

<div class="resource-list">
{{< resource-list >}}
</div>

### Contribution
To add resources or update existing entries, please reach out to the BBQS team.

### Future Plans
We are working on integrating a chatbot that will connect to a database of JSON-organized resources, making it even easier to find the information you need. We are also working on an ingestion tool that will make it easier to add and update entries! Stay tuned for updates.

<script src="/js/resource-search.js"></script>
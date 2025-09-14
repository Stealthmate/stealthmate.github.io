---
layout: page
title: 経験
permalink: /experience/
toc: true
---

## 概要

2025 年時点。

| 能力レベル | 言語・技術名 |
|---|---|
| 高度な実務経験 |  Python (7 年以上)<br>Typescript (7年以上)<br>SQL (7 年以上)<br>Rust (3 年以上)<br>Kubernetes (3 年以上) |
| 趣味もしくは軽度な実務経験 | Haskell (2 年以上)<br>C++ (1 年以上), hledger (2 年以上) |
| 遊び程度 | Go, MongoDB, Arduino, Android |

## 経験談

{% assign exps = site.experience | reverse %}
{% for exp in exps %}
- [({{ exp.custom.period }}) {{ exp.title }}]({{ exp.url }}){% unless exp.custom.tags == nil %}
    - {% for tag in exp.custom.tags %}<span class="tech-tag">{{ tag }}</span>{% endfor %}{% endunless %}{% endfor %}

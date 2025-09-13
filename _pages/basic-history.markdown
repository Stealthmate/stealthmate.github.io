---
layout: page
title: 略歴
permalink: /basic-history/
toc: true
---

## 職歴

### 2025-04 〜 現在: FP&A
{: #hist-ly-fpa .anchor}

_LINE ヤフー株式会社_

FP&A 職。インフラ部門全体に関する予実管理、コスト分析、戦略策定などに従事。

{% assign exps = site.experience | reverse | where_exp: "item", "item.custom.affiliation.link == '#hist-ly-fpa'" %}
{% for exp in exps %}
- [({{ exp.custom.period }}) {{ exp.title }}]({{ exp.url }}){% endfor %}

### 2024-04 〜 2025-03: セキュリティエンジニア
{: #hist-ly-newgrad .anchor}

_LINEヤフー株式会社_

修士課程修了とともにそのまま LINE ヤフーに正社員（新卒）として入社しました。

{% assign exps = site.experience | reverse | where_exp: "item", "item.custom.affiliation.link == '#hist-ly-newgrad'" %}
{% for exp in exps %}
- [({{ exp.custom.period }}) {{ exp.title }}]({{ exp.url }}){% endfor %}

### 2020-10 〜 2024-03: セキュリティエンジニア
{: #hist-ly-sec-eng .anchor}

_LINEヤフー株式会社 (旧 LINE 株式会社)_

学部 3 年生のときに LINE の夏インターンを受けた結果、アルバイトのオファーをいただき、以降修士課程修了まで約 3.5 年間働きました。

{% assign exps = site.experience | reverse | where_exp: "item", "item.custom.affiliation.link == '#hist-ly-sec-eng'" %}
{% for exp in exps %}
- [({{ exp.custom.period }}) {{ exp.title }}]({{ exp.url }}){% endfor %}

### 2018-03 〜 2019-10: エンジニア
{: #hist-lemo .anchor}

_株式会社 LEMO_

大学入学と同じタイミングで、初めての実務として LEMO でのアルバイトを始めました。

{% assign exps = site.experience | reverse | where_exp: "item", "item.custom.affiliation.link == '#hist-lemo'" %}
{% for exp in exps %}
- [({{ exp.custom.period }}) {{ exp.title }}]({{ exp.url }}){% endfor %}
- 自社サービスウェブ開発 (Haskell, React)

## 学歴

- 埼玉大学、情報工学修士 (2022 年 〜 2024 年)
- 埼玉大学、情報工学学士 (2018 年 〜 2022 年)

---
layout: experience
title: Firewall 管理ツールの開発と運用 (TODO)
toc: true
date: 2020-08-01
custom:
  period: 2020 年 〜 2022 年
  affiliation:
    title: LINEヤフー株式会社
    link: '#hist-ly-sec-eng'
---

## 概要

夏インターンで LINE に入ったときに任されたのは LFMS というシステムの開発でした。LFMS とは LINE Firewall Management System の略称で、文字通り LINE 株式会社が運用するファイアウォールを管理するためのシステムです。具体的には、 作業者が数種類の firewall 機器の config を元々作業者が手で編集していたのを、簡易的な Web UI で （設定概念を機器によらないように抽象化しながら） 簡単にできるようにするためのシステムです。

## チーム情報

開発者は元々セキュリティエンジニア一人で、途中から私がインターンとして加わり、1 年経った辺りで同僚が転職したので残りの 2 年は私一人だけでした。

## 開発・実務内容

私が加わった当初のシステムは以下のような状態でした。

- Python (django) での API
- Vue/Vuetify での FE
- CI/CD なし。テストなし。
- デプロイは VM に ssh で入ってプロセスを閉じて、 `git pull` して、マイグレーションを実行してプロセスを立て直すスタイル。
- 最初の一年は色々勉強しながら細かい機能を追加で開発し、同僚が辞めた時期から本格的な改善（半ば作り直し）を始めました。

- CI/CD の導入 - 社内 CircleCI と GHE をつなげて、 linter/formatter などの基本的なチェックツールを入れて、それが CI でちゃんと確認されるようにしました。
 -インフラ整備 - 途中から規模が上がり、ダウンタイムも前より許容できなくなったので、勉強の機会だと思って Kubernetes クラスタを作ってそこでデプロイされるようにしました。このタイミングでは Kubernetes 完全初心者です。
- Kubernetes に手動でデプロイするのはしんどいので、自力で勉強して ArgoCD を導入しました。
- 監視 - エラーが起こるたびに pod のログを見るのは流石に無理があるので、ネットの知恵を借りながら fluentbit と ElasticSearch を使ってログ周りを整備しました。
- 監査ログも取れと言われたので、2種類のログ系統を作って、それぞれ別の保存先に流すなりして、 Elastic Search のキャパを何回か当てて事故を起こしつつ最終的にはキレイな仕組みを実現。
- 途中から処理規模も増えて、システムのコケ方を分析すべく Prometheus も導入しました。

こうやって改善を重ねながらシステムの機能も随時開発して、定期実行なり外部システムとの連携なり色んなことをしました。

## その他

関連記事:

- [An intern's tale of designing LINE's firewall secretary](https://engineering.linecorp.com/en/blog/designing-line-firewall-secretary)

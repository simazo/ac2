action cableの勉強。 deviseによるユーザ認証、Roomありパターン。

【Rails6.0】ActionCableとDeviseの欲張りセットでリアルタイムチャット作成(改正版)
参考記事 https://qiita.com/rhiroe/items/4c4e983e34a44c5ace27

注意点
turbolinksを無効にしないとroom_channel.rbでparams['room']が取得できない。
同様の障害は、参考記事のコメントに散見。

1	创建钱包: 到 https://api.jingtum.com/v2/wallet/new

	1	记录下私钥和公钥

	2	*重要* 都要保存好，私钥丢失或者记错没有人可以帮忙 *重要*

2	查询钱包: 

	1	到 http://state.jingtum.com, 公钥输入搜索栏中，搜索应该提示未激活

	2	或者 到https://api.jingtum.com/v2/accounts/j................................./balances, 应该返回 "Account Not Found"

3	转账

	1	支付给新创建钱包一定数量的SWT

3	激活钱包

	1	转入30个SWT

	2	查询钱包应该看到记录

4	转账 查询

	1	保险起见，应该分多次转入，查询确认后继续转帐

5	冷冻

	1	该钱包的唯一访问方式是通过私钥和公钥,只要保存好就是安全的

**	解冻

	1	火花链找大神帮忙

	2	或者学习文档使用SDK转出来 http://developer.jingtum.com

**	注意

	*	这是简单的方法，并不是最安全的方法；安全的方法应该拔掉网线，离线创建。如何创建, 我也不会

	*	如果请别人帮忙解冻，应该全额解冻。如果需要，可以将部分重新冷藏

文档有用? 欢迎打赏 jU2YgNfRcTghKJXWTTWNMBpPnmXhyihEpn


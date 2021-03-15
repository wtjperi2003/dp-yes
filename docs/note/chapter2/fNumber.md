#### 范数

##### 向量的范数

向量的1-范数： ![](./pic/fNumber/1.gif); 各个元素的绝对值之和；

向量的2-范数：![](./pic/fNumber/2.gif);；每个元素的平方和再开平方根；

向量的无穷范数：![](./pic/fNumber/3.gif);

p-范数：![](./pic/fNumber/4.gif)，其中正整数p≥1，并且有![](./pic/fNumber/5.gif)

例：向量X=[2, 3, -5, -7] ，求向量的1-范数，2-范数和无穷范数。

向量的1-范数：各个元素的绝对值之和；![](./pic/fNumber/6.gif)=2+3+5+7=17；

Matlab代码：X=[2, 3, -5, -7]; XLfs1=norm(X,1);

向量的2-范数：每个元素的平方和再开平方根；![](./pic/fNumber/7.gif)

Matlab代码：X=[2, 3, -5, -7]; XLfs2=norm(X,2);

向量的无穷范数：

（1）正无穷范数：向量的所有元素的绝对值中最大的；即X的正无穷范数为：7；

Matlab代码：X=[2, 3, -5, -7]; XLfsz=norm(X,inf);

（2）负无穷范数：向量的所有元素的绝对值中最小的；即X的负无穷范数为：2；

Matlab代码：X=[2, 3, -5, -7]; XLfsf=norm(X,-inf);

##### 2、矩阵的范数

设：向量![](./pic/fNumber/8.gif)，矩阵![](./pic/fNumber/9.gif)，例如矩阵A为：

A=[2, 3, -5, -7;

   4, 6,  8, -4;

   6, -11, -3, 16];
   
   
（1）矩阵的1-范数（列模）：![](./pic/fNumber/10.gif)；矩阵的每一列上的元素绝对值先求和，再从中取个最大的，（列和最大）；即矩阵A的1-范数为：27

Matlab代码：fs1=norm(A,1);

（2）矩阵的2-范数（谱模）：![](./pic/fNumber/11.gif)，其中![](./pic/fNumber/12.gif)为![](./pic/fNumber/13.gif)的特征值；矩阵![](./pic/fNumber/14.png)的最大特征值开平方根。

 Matlab代码：fs2=norm(A,2);


（3）矩阵的无穷范数（行模）：![](./pic/fNumber/15.gif)；矩阵的每一行上的元素绝对值先求和，再从中取个最大的，（行和最大）

Matlab代码：fswq=norm(A,inf);

---
原文： [点击跳转](https://blog.csdn.net/zaishuiyifangxym/article/details/81673491)


# 需要修正的地方：
- [x] 1.表面积计算公式不对(需要提供正确的公式）
- [x] 2.柜体材料缺少 不锈钢材质 4.5  和铝合金材质 12：（完整列表需要提供）
- [x] 3.机柜图片不清晰：（需要提供清晰的图片）
- [x] 4.最终计算无结果：

```text
基础值=温差（左下角计算项）*表面积（第一项计算）*系数（右边中间的材料系数选择项）+用户输入值*0.03
加热器：结果=基础值
机柜空调：结果=基础值
水热交换器：结果=基础值
风扇过滤器：结果=0.05*基础值/温差（左下角计算项）

```

- [x] （加热器同机柜空调界面）5.加热器界面和冷凝水蒸发器界面应不一样（需要提供不一样的界面）
- [x] 6.连续杂项功率计算：
```text
基础值:温差（左下角计算项）*表面积（第一项计算）*系数（右边中间的材料系数选择项）

加热器：基础值-用户输入值*0.03
水热交换器：0.95*机柜空调
风扇过滤器：0.035*用户输入值*0.03+基础值
```

其中，`机柜空调`需要根据用户输入值不同而计算公式不同：

| 用户输入值/w  | 公式                             |
| ------------- | -------------------------------- |
| 1-20000       | 1.1 * (用户输入值*0.01+基础值)   |
| 20001-40000   | 1.1 * (用户输入值*0.0175+基础值) |
| 40001-60000   | 1.1 * (用户输入值*0.02+基础值)   |
| 60001-80000   | 1.2 * (用户输入值*0.02+基础值)   |
| 80001-3000000 | 1.2 * (用户输入值*0.024+基础值)  |



# 一共5个业务界面

常规界面：加热器、机柜空调、水热交换器
添加了左下角的界面：风扇过滤器
单页：冷凝蒸发器

# 需要小的改动的地方：
- [x] 1.开关改成蓝色底色
- [x] 2.表面积计算在原有基础上-5mm
- [x] 3.柜体位置的描述中第四个改成“一套柜中第一个或最后一个控制柜,靠墙”
- [x] 4.冷凝水蒸发器`安装方式`选项仅保留一项：`标准安装`
- [x] 程序图标修改为公司logo，名称修改为`WK选型系统`

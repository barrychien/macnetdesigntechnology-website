# 悅慶資訊網站設計理念

## 設計方向一：深海科技 (Deep Ocean Tech)
<response>
<text>
**Design Movement**: Brutalist Tech Minimalism + Dark Mode Premium
**Core Principles**:
1. 深藍色 (#1C2C45) 主色調，象徵穩定與專業
2. 亮紅色 (#E91E63) 強調色，引導視線與互動
3. 幾何線條與粒子動畫，強化科技感
4. 非對稱佈局，避免呆板

**Color Philosophy**: 深海藍底色象徵深度與信任，紅色強調如同電路板上的電流，代表活力與創新

**Layout Paradigm**: 左右非對稱分割，Hero 區塊採用斜切設計，內容區塊交錯排列

**Signature Elements**:
1. 動態幾何線條背景 (SVG 動畫)
2. 卡片 hover 時的紅色邊框光暈效果
3. 數字計數器動畫 (Fun Facts)

**Interaction Philosophy**: 滾動觸發動畫，元素從下方淡入，強調流暢的使用者體驗

**Animation**: 
- Hero: 粒子流動背景
- 服務卡片: hover 時上移 + 邊框發光
- 計數器: 滾動到視窗時數字跳動

**Typography System**: Poppins (標題，Bold 700) + Open Sans (正文，Regular 400)
</text>
<probability>0.08</probability>
</response>

## 設計方向二：精密工程 (Precision Engineering)
<response>
<text>
**Design Movement**: Swiss Grid + Tech Corporate
**Core Principles**:
1. 精確的網格系統，每個元素都有明確位置
2. 大量留白，讓內容呼吸
3. 強烈的色彩對比，黑白深藍與紅色
4. 線條感設計，邊框而非填充

**Color Philosophy**: 工業精密感，深藍如同精密儀器的外殼，紅色如同警示燈，精準而有力

**Layout Paradigm**: 嚴格的 12 欄網格，但透過跨欄和偏移創造視覺張力

**Signature Elements**:
1. 細線邊框卡片設計
2. 大型數字作為裝飾元素
3. 斜線分隔區塊

**Interaction Philosophy**: 精準的 hover 狀態，線條延伸動畫，強調精確性

**Animation**: 線條繪製動畫，元素沿軸線滑入

**Typography System**: Poppins (標題，ExtraBold 800) + Open Sans (正文，Light 300)
</text>
<probability>0.07</probability>
</response>

## 設計方向三：數位脈衝 (Digital Pulse) ← 選定方案
<response>
<text>
**Design Movement**: Cyberpunk Minimal + Corporate Tech
**Core Principles**:
1. 深藍色 (#1C2C45) 主色調，搭配深色漸層背景
2. 亮紅色 (#E91E63) 作為強調色和 CTA
3. 幾何圖形動畫，科技感十足
4. 非對稱佈局，動態視覺流動

**Color Philosophy**: 
- 主色 #1C2C45 (深海藍) - 專業、信任、穩定
- 強調色 #E91E63 (亮紅) - 活力、創新、行動
- 輔助色 #0A1628 (深夜藍) - 深度、神秘
- 文字白 #F0F4FF - 清晰可讀

**Layout Paradigm**: 
- Hero 區塊：全螢幕，左側文字右側動態圖形
- 服務區塊：四欄卡片，交錯高度
- 客戶區塊：無限滾動 LOGO 輪播
- 聯絡區塊：左側資訊右側表單，非對稱分割

**Signature Elements**:
1. 動態幾何線條/網格背景 (Canvas 或 CSS)
2. 卡片紅色左邊框 + hover 發光效果
3. 區塊間的斜切過渡

**Interaction Philosophy**: 
- 滾動觸發的淡入動畫
- hover 時的微互動 (顏色變化、位移)
- 按鈕的波紋點擊效果

**Animation**: 
- Hero: 浮動幾何圖形背景
- 計數器: Intersection Observer 觸發數字跳動
- 卡片: 從下方淡入 + 輕微上移
- LOGO 輪播: 無限滾動

**Typography System**: 
- Poppins 700/800 (標題)
- Open Sans 400/600 (正文)
- 大型標題使用 clamp() 響應式字體大小
</text>
<probability>0.09</probability>
</response>

## 選定方案：數位脈衝 (Digital Pulse)
採用第三方案，以深藍色科技感為核心，搭配亮紅色強調色，創造現代化的企業科技網站。

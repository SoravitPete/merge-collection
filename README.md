# Merge Collection Project

โปรเจคนี้เป็นตัวอย่างการทำงานเกี่ยวกับการ **merge collection** ด้วย TypeScript พร้อมชุดทดสอบ (test) ที่เขียนด้วย Jest เพื่อให้สามารถตรวจสอบผลลัพธ์การทำงานได้

## 📦 ขั้นตอนการใช้งานหลังจาก Clone โปรเจค

หลังจากที่ผู้ใช้ clone โปรเจคนี้ไปแล้ว ให้ทำตามขั้นตอนดังนี้

### 1. ติดตั้ง Dependencies

เปิด terminal ที่โฟลเดอร์โปรเจค แล้วรันคำสั่ง

```bash
npm install
```

หากมี dependency conflict สามารถใช้คำสั่ง

```bash
npm i -f
```

### 2. รัน Unit Test

เพื่อทดสอบการทำงานของโปรเจค ให้ใช้คำสั่ง

```bash
npm test
```

คำสั่งนี้จะรัน test ทั้งหมดในโฟลเดอร์ `test` และแสดงผลลัพธ์ว่า test ผ่านหรือไม่

### 3. รันโปรแกรมเพื่อดูผลลัพธ์

หากต้องการรันโปรแกรมหลักเพื่อดูผลลัพธ์การทำงาน ให้ใช้คำสั่ง

```bash
npm start
```

โปรแกรมจะทำงานจากไฟล์ในโฟลเดอร์ `src` และแสดงผลลัพธ์ใน terminal

## 📁 โครงสร้างโปรเจค

```
MERGE-COLLECTION
│
├── src
│   ├── index.ts
│   └── merge.ts
│
├── test
│   └── merge.test.ts
│
├── jest.config.js
├── tsconfig.json
├── package.json
└── README.md
```

* `src/` : เก็บ source code หลักของโปรเจค
* `test/` : เก็บ unit test สำหรับทดสอบฟังก์ชัน
* `jest.config.js` : configuration ของ Jest
* `tsconfig.json` : configuration ของ TypeScript

## 🧪 Tools ที่ใช้

* **TypeScript**
* **Jest**
* **Node.js**

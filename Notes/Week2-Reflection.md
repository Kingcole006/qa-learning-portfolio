# Week 2 Reflection: API Testing Fundamentals

**Dates:** ~February 8-14, 2026  
**Duration:** 5-6 days  
**Focus:** REST APIs, Postman Basics, HTTP Methods

---

## 🎯 What I Set Out to Learn

- Understand what APIs are and how they work
- Learn REST API concepts
- Master HTTP methods (GET, POST, PUT, DELETE)
- Get comfortable with Postman
- Understand JSON format
- Learn status codes

---

## ✅ What I Actually Learned

### Core Concepts
- **API Fundamentals:** What APIs are, how they enable communication
- **REST Architecture:** RESTful principles and design
- **HTTP Methods:** GET (read), POST (create), PUT (update), DELETE (remove)
- **Request/Response Cycle:** Headers, body, status codes
- **JSON:** Structure, syntax, validation

### Practical Skills
- Using Postman for API testing
- Crafting API requests with proper structure
- Reading and validating JSON responses
- Understanding status codes (200, 201, 400, 404, 500)
- Manual API testing workflow

### Tools Mastered
- **Postman:** Collection organization, request building
- **JSONPlaceholder:** Practice API for learning
- **JSON validators:** Checking response structure

---

## 💡 Key Takeaways

### Most Important Lesson
**"APIs are the backbone of modern software."**

Almost every application uses APIs - web apps, mobile apps, IoT devices. Learning to test them is fundamental to modern QA.

### Biggest Surprise
**How logical and structured API testing is**

Coming from manual UI testing, API testing felt more predictable and easier to automate. The request→response model is consistent and testable.

### Most Valuable Skill
**Reading JSON responses**

Being able to quickly parse JSON, identify data structures, and validate responses became second nature by the end of the week.

**Example progression:**
- Day 1: Confused by curly braces and brackets
- Day 6: Instantly spotting missing fields or wrong data types

---

## 📊 Self-Assessment

| Skill | Before | After | Growth |
|-------|--------|-------|--------|
| Understanding APIs | 1 | 8 | +7 |
| Using Postman | 0 | 8 | +8 |
| HTTP Methods | 2 | 9 | +7 |
| JSON parsing | 0 | 8 | +8 |
| Status codes | 3 | 9 | +6 |
| **Overall Week 2** | **1/10** | **8/10** | **+7** |

---

## 🏆 Proudest Moment

**Successfully testing a complete CRUD workflow manually**

Creating a resource with POST, reading it with GET, updating with PUT, and deleting with DELETE - seeing the entire lifecycle work perfectly was incredibly satisfying.

It was the moment I truly understood how APIs work.

---

## 🚧 Biggest Challenge

**Understanding the difference between PUT and PATCH**

Both update resources, but:
- PUT: Replace entire resource
- PATCH: Update specific fields

**How I overcame it:**
- Tested both methods
- Compared responses
- Understood the practical differences
- (Though JSONPlaceholder doesn't truly persist changes, the concept clicked)

---

## 🎓 Technical Breakthrough

**Grasping request chaining concepts**

Understanding that:
1. POST creates a resource → returns ID
2. GET uses that ID to retrieve the resource
3. PUT/PATCH updates using the ID
4. DELETE removes using the ID

This mental model prepared me perfectly for Week 3's automation.

---

## 💭 Personal Reflections

### Energy Level
**High and sustained**

The "aha moments" kept coming. Each new concept built on the last in a logical way.

### Difficulty Level
**Perfect progression**

Started simple (GET requests) and built complexity gradually (POST with body, PUT updates).

### Favorite Tool
**Postman**

The visual interface made learning API concepts much easier than if I'd started with command-line tools.

---

## 🔄 What I'd Do Differently

1. **Spend more time on status codes early** - Understanding when to expect 200 vs 201 vs 400 vs 404 is crucial
2. **Practice with different APIs sooner** - Only using JSONPlaceholder limited exposure to real-world variations
3. **Take more notes on JSON structure** - Would have helped in Week 3

---

## 📈 Growth Indicators

**Before Week 2:**
- Thought APIs were mystical black boxes
- No idea how mobile apps got data
- Intimidated by technical concepts

**After Week 2:**
- Confident understanding of API architecture
- Can test APIs manually with Postman
- Comfortable with JSON
- Ready for automation

**Transformation:** From API novice to comfortable API tester

---

## 🎯 Connection to Week 3

**How Week 2 prepared me for automation:**

✅ **Postman proficiency:** Already knew the interface  
✅ **HTTP methods:** Understood what each does  
✅ **JSON fluency:** Could quickly validate responses  
✅ **Status codes:** Knew what success/failure looks like  
✅ **Request structure:** Ready to automate the patterns  

**Week 2 made Week 3's automation logical instead of overwhelming.**

---

## 💬 If I Could Tell Week 2 Me One Thing

**"The manual testing you're doing now is teaching you what to automate."**

Every manual GET request, every JSON validation, every status code check - you'll automate all of this next week. Pay attention to the patterns.

---

## 📝 Memorable Moments

**Aha Moment #1:**
*"Oh! POST returns 201 Created, not 200 OK!"*

Understanding semantic status codes - not all success is "200."

**Aha Moment #2:**
*"The URL structure tells you what the endpoint does!"*

- `/users` = all users
- `/users/1` = specific user
- `/users/1/posts` = that user's posts

RESTful URL patterns clicked.

**Frustrating Moment:**
*Getting 404 errors because I forgot the `/` in the URL*

`https://api.com/users1` vs `https://api.com/users/1`

Learned attention to detail matters!

---

## 🎓 Skills Ready for Week 3

✅ Postman interface mastery  
✅ HTTP method understanding  
✅ JSON validation skills  
✅ Status code interpretation  
✅ API testing workflow  
✅ Request/response model  

**Readiness Level:** 9/10 - Excited for automation!

---

## 🔮 Looking Forward to Week 3

**Excited about:**
- Automating what I learned manually
- Writing test scripts
- Learning environment variables
- Building collections

**Anticipated challenges:**
- JavaScript scripting
- Understanding test automation patterns

**Confidence:**
Very high. Week 2 gave me the foundation to automate with confidence.

---

## 📊 Week 2 Impact

**Before:** Manual tester with no API knowledge  
**After:** API tester ready for automation

**Key metric:**
- Week 1: Could test UIs manually
- Week 2: Could test APIs manually
- Week 3 readiness: Ready to automate both!

---

**Week 2 Grade:** A  
**Difficulty:** Moderate  
**Value Gained:** Critical foundation for automation  
**Enjoyment:** High - loved the logical structure  

---

**Status:** ✅ Complete | **Next:** Week 3 - Postman Automation
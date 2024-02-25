package com.example.lesson.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.lesson.dao.LessonRepository;
import com.example.lesson.dto.Lesson;

@RestController
@RequestMapping(value = "Auth")
public class LessonController {

	@Autowired
	LessonRepository lessonRepository;

//	@GetMapping("lessons")
//	public List<Lesson> getAllLesson() {
//		return lessonRepository.findAll();
//	}
	
	@Autowired
    public LessonController(LessonRepository lessonRepository) {
        this.lessonRepository = lessonRepository;
    }

	@GetMapping("/lessons{page}")
	public ResponseEntity<Page<Lesson>> getAllLessons(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "5") int size) {
		
		Pageable pageable = PageRequest.of(page, size);
		Page<Lesson> lessonsPage = lessonRepository.findAll(pageable);
		
		if(lessonsPage.isEmpty()) {
			return ResponseEntity.noContent().build();
	
		}else {
			return ResponseEntity.ok(lessonsPage);
		}
		
	}

	@PostMapping("lessons/{id}")
	public ResponseEntity<String> deleteLesson(@PathVariable Integer id) {
		try {
			lessonRepository.deleteById(id);
			return ResponseEntity.ok("Lesson deleted successfully");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Lesson not found");
		}
	}

	@PostMapping("lessons")
	public Lesson addLesson(@RequestBody Lesson lesson) {
		return lessonRepository.save(lesson);

	}

	@PostMapping("lesson/{id}")
	public ResponseEntity<String> updateLesson(@PathVariable Integer id, @RequestBody Lesson lesson) {

		if (lessonRepository.existsById(id)) {
			lesson.setLessonId(id);
			lessonRepository.save(lesson);
			return ResponseEntity.ok("lesson updated");
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}

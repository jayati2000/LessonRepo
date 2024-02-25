package com.example.lesson.dao;

import java.awt.print.Pageable;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.lesson.dto.Lesson;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, Integer>{


}

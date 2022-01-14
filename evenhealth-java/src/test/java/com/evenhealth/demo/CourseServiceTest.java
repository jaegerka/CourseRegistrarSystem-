package com.evenhealth.demo;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.evenhealth.demo.service.CourseService;

@RunWith(MockitoJUnitRunner.class)
public class CourseServiceTest {

	@InjectMocks
	DemoApplication demoApplication = new DemoApplication();
	
	@Mock
	CourseService cs;
	
	@Test
	public void TestGetAllCourses() {
		//Tests that result is not null
		Assert.assertNotNull(cs.getAllCourses());
	}
}

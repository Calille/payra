import { School, Candidate, Job, Booking } from '../types'

// Mock Schools Data
export const mockSchools: School[] = [
  {
    id: 'sch-001',
    name: 'St. Mary\'s Primary School',
    address: '123 Church Lane',
    postcode: 'SW1A 1AA',
    headteacher: 'Mrs. Sarah Johnson',
    phone: '020 7946 0958',
    email: 'office@stmarys.edu.uk',
    lastContact: '2024-01-15',
    subjects: ['Mathematics', 'English', 'Science'],
    urgency: 'high',
    distance: 2.3,
    notes: 'Urgent need for Year 3 teacher starting next week',
    callHistory: [
      {
        id: 'call-001-1',
        timestamp: '2024-01-19T10:30:00Z',
        note: 'Spoke with Mrs. Johnson about Year 3 position. Very urgent need, starting Monday. Looking for experienced KS2 teacher.',
        outcome: 'interested',
        duration: 8
      },
      {
        id: 'call-001-2',
        timestamp: '2024-01-17T14:20:00Z',
        note: 'Initial contact made. Headteacher unavailable, left message with secretary.',
        outcome: 'callback_requested',
        duration: 3
      }
    ],
    // Client relationship data
    status: 'active',
    relationshipStart: '2023-09-15',
    totalPlacements: 8,
    activePlacements: 2,
    totalRevenue: 12400,
    lastPlacementDate: '2024-01-15',
    placementHistory: [
      {
        id: 'place-001-1',
        teacherName: 'James Mitchell',
        teacherId: 'can-001',
        subject: 'Mathematics',
        startDate: '2024-01-15',
        endDate: '2024-03-15',
        dailyRate: 160,
        status: 'active',
        feedback: 'Excellent teacher, students responding well',
        rating: 5
      },
      {
        id: 'place-001-2',
        teacherName: 'Sophie Williams',
        teacherId: 'can-017',
        subject: 'Primary',
        startDate: '2023-11-01',
        endDate: '2023-12-20',
        dailyRate: 145,
        status: 'completed',
        feedback: 'Great with Year 3, very professional',
        rating: 4
      }
    ],
    preferredDailyRate: { min: 140, max: 170 },
    paymentTerms: 'weekly',
    invoiceContact: 'finance@stmarys.edu.uk',
    satisfactionRating: 4.8
  },
  {
    id: 'sch-002',
    name: 'Oakwood Secondary Academy',
    address: '45 Oak Street',
    postcode: 'N1 2AB',
    headteacher: 'Mr. David Thompson',
    phone: '020 7946 0959',
    email: 'admin@oakwood.ac.uk',
    lastContact: '2024-01-12',
    subjects: ['History', 'Geography', 'English'],
    urgency: 'medium',
    distance: 4.7,
    notes: 'Looking for long-term supply teacher for maternity cover',
    callHistory: [
      {
        id: 'call-002-1',
        timestamp: '2024-01-18T11:45:00Z',
        note: 'Discussed maternity cover position with Mr. Thompson. Starts February 5th, ends December. Preference for someone with GCSE experience.',
        outcome: 'interested',
        duration: 12
      }
    ],
    // Client relationship data
    status: 'active',
    relationshipStart: '2022-03-10',
    totalPlacements: 15,
    activePlacements: 1,
    totalRevenue: 28750,
    lastPlacementDate: '2024-01-12',
    placementHistory: [
      {
        id: 'place-002-1',
        teacherName: 'David Kumar',
        teacherId: 'can-005',
        subject: 'History',
        startDate: '2024-01-12',
        endDate: '2024-02-05',
        dailyRate: 155,
        status: 'active',
        feedback: 'Excellent knowledge, great with GCSE classes',
        rating: 5
      },
      {
        id: 'place-002-2',
        teacherName: 'Caroline Davis',
        teacherId: 'can-019',
        subject: 'English',
        startDate: '2023-10-02',
        endDate: '2023-12-15',
        dailyRate: 160,
        status: 'completed',
        feedback: 'Outstanding English teacher, A-Level results improved significantly',
        rating: 5
      }
    ],
    preferredDailyRate: { min: 150, max: 180 },
    paymentTerms: 'monthly',
    invoiceContact: 'accounts@oakwood.ac.uk',
    satisfactionRating: 4.9
  },
  {
    id: 'sch-003',
    name: 'Riverside Community School',
    address: '78 River View',
    postcode: 'E1 6GH',
    headteacher: 'Ms. Emma Wilson',
    phone: '020 7946 0960',
    email: 'info@riverside.sch.uk',
    subjects: ['Art', 'Design Technology'],
    urgency: 'low',
    distance: 1.8,
    notes: 'Part-time position available from February',
    callHistory: [
      {
        id: 'call-003-1',
        timestamp: '2024-01-08T16:10:00Z',
        note: 'Spoke about part-time Art teacher position. 3 days per week starting February. Not urgent but would like to fill soon.',
        outcome: 'interested',
        duration: 6
      }
    ],
    // Client relationship data
    status: 'pending',
    relationshipStart: '2024-01-08',
    totalPlacements: 1,
    activePlacements: 1,
    totalRevenue: 2175,
    lastPlacementDate: '2023-12-01',
    placementHistory: [
      {
        id: 'place-003-1',
        teacherName: 'Mark Johnson',
        teacherId: 'can-020',
        subject: 'Design Technology',
        startDate: '2023-12-01',
        endDate: '2023-12-22',
        dailyRate: 145,
        status: 'completed',
        feedback: 'Great hands-on approach, students enjoyed practical lessons',
        rating: 4
      }
    ],
    preferredDailyRate: { min: 130, max: 160 },
    paymentTerms: 'end_of_assignment',
    invoiceContact: 'finance@riverside.sch.uk',
    satisfactionRating: 4.2
  },
  {
    id: 'sch-004',
    name: 'Greenwich Grammar School',
    address: '156 Grammar Road',
    postcode: 'SE10 8UJ',
    headteacher: 'Dr. Michael Brown',
    phone: '020 7946 0961',
    email: 'office@greenwich-grammar.edu',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    urgency: 'high',
    distance: 6.2,
    notes: 'Science department expansion - multiple positions',
    callHistory: [
      {
        id: 'call-004-1',
        timestamp: '2024-01-16T09:15:00Z',
        note: 'Dr. Brown confirmed they need 2 science teachers urgently. Chemistry specialist preferred but will consider general science teachers.',
        outcome: 'interested',
        duration: 15
      },
      {
        id: 'call-004-2',
        timestamp: '2024-01-11T13:30:00Z',
        note: 'Initial inquiry about science positions. Very interested in building relationship.',
        outcome: 'interested',
        duration: 7
      }
    ],
    // Client relationship data
    status: 'active',
    relationshipStart: '2021-11-20',
    totalPlacements: 22,
    activePlacements: 3,
    totalRevenue: 45600,
    lastPlacementDate: '2024-01-16',
    placementHistory: [
      {
        id: 'place-004-1',
        teacherName: 'Dr. Rachel Green',
        teacherId: 'can-015',
        subject: 'Chemistry',
        startDate: '2024-01-16',
        endDate: '2024-07-19',
        dailyRate: 185,
        status: 'active',
        feedback: 'Exceptional chemistry knowledge, A-Level students love her teaching',
        rating: 5
      },
      {
        id: 'place-004-2',
        teacherName: 'Robert Garcia',
        teacherId: 'can-003',
        subject: 'Biology',
        startDate: '2023-09-04',
        endDate: '2024-07-19',
        dailyRate: 170,
        status: 'active',
        feedback: 'Head of Science experience showing, department running smoothly',
        rating: 5
      },
      {
        id: 'place-004-3',
        teacherName: 'Michael Thompson',
        teacherId: 'can-007',
        subject: 'Physics',
        startDate: '2023-10-15',
        endDate: '2023-12-22',
        dailyRate: 165,
        status: 'completed',
        feedback: 'Strong STEM background, excellent with practical experiments',
        rating: 4
      }
    ],
    preferredDailyRate: { min: 160, max: 200 },
    paymentTerms: 'monthly',
    invoiceContact: 'finance@greenwich-grammar.edu',
    satisfactionRating: 4.9
  },
  {
    id: 'sch-005',
    name: 'Harmony International School',
    address: '22 International Way',
    postcode: 'W2 3CD',
    headteacher: 'Mrs. Lisa Chen',
    phone: '020 7946 0962',
    email: 'hr@harmony-intl.edu',
    subjects: ['French', 'Spanish', 'German'],
    urgency: 'medium',
    distance: 3.1,
    notes: 'Modern languages department looking for native speakers',
    callHistory: [
      {
        id: 'call-005-1',
        timestamp: '2024-01-12T14:45:00Z',
        note: 'Discussed modern languages positions with Mrs. Chen. Particularly interested in French native speaker for GCSE classes.',
        outcome: 'interested',
        duration: 10
      }
    ],
    // Client relationship data
    status: 'active',
    relationshipStart: '2023-05-12',
    totalPlacements: 6,
    activePlacements: 1,
    totalRevenue: 15800,
    lastPlacementDate: '2024-01-12',
    placementHistory: [
      {
        id: 'place-005-1',
        teacherName: 'Isabella Santos',
        teacherId: 'can-014',
        subject: 'Spanish',
        startDate: '2024-01-12',
        endDate: '2024-04-12',
        dailyRate: 150,
        status: 'active',
        feedback: 'Native speaker bringing authentic language experience',
        rating: 5
      },
      {
        id: 'place-005-2',
        teacherName: 'Isabella Santos',
        teacherId: 'can-014',
        subject: 'French',
        startDate: '2023-09-01',
        endDate: '2023-12-15',
        dailyRate: 150,
        status: 'completed',
        feedback: 'Excellent French pronunciation and cultural knowledge',
        rating: 4
      }
    ],
    preferredDailyRate: { min: 145, max: 175 },
    paymentTerms: 'monthly',
    invoiceContact: 'accounts@harmony-intl.edu',
    satisfactionRating: 4.7
  },
  // Adding a school with no recent contact to demonstrate sorting
  {
    id: 'sch-006',
    name: 'Westfield Academy',
    address: '90 Academy Road',
    postcode: 'W3 7QR',
    headteacher: 'Mr. James Roberts',
    phone: '020 7946 0963',
    email: 'admin@westfield.ac.uk',
    lastContact: '2023-11-20',
    subjects: ['Mathematics', 'ICT'],
    urgency: 'medium',
    distance: 5.1,
    notes: 'Technology department looking for ICT specialist',
    callHistory: [
      {
        id: 'call-006-1',
        timestamp: '2023-12-28T10:20:00Z',
        note: 'Spoke about ICT teacher requirement. Position may become available in spring term.',
        outcome: 'interested',
        duration: 6
      }
    ],
    // Client relationship data
    status: 'inactive',
    relationshipStart: '2022-01-15',
    totalPlacements: 4,
    activePlacements: 0,
    totalRevenue: 8200,
    lastPlacementDate: '2023-07-20',
    placementHistory: [
      {
        id: 'place-006-1',
        teacherName: 'Hassan Ali',
        teacherId: 'can-018',
        subject: 'ICT',
        startDate: '2023-05-01',
        endDate: '2023-07-20',
        dailyRate: 155,
        status: 'completed',
        feedback: 'Good technical knowledge, students engaged well',
        rating: 4
      }
    ],
    preferredDailyRate: { min: 140, max: 170 },
    paymentTerms: 'end_of_assignment',
    invoiceContact: 'finance@westfield.ac.uk',
    satisfactionRating: 4.1
  },
  {
    id: 'sch-007',
    name: 'Cedar Heights Primary',
    address: '45 Cedar Grove',
    postcode: 'N8 9LM',
    headteacher: 'Mrs. Rachel Green',
    phone: '020 7946 0964',
    email: 'office@cedarheights.sch.uk',
    subjects: ['Primary', 'SEND'],
    urgency: 'low',
    distance: 7.2,
    notes: 'Occasional supply needed for SEND support',
    callHistory: [],
    // Client relationship data
    status: 'prospect',
    relationshipStart: undefined,
    totalPlacements: 0,
    activePlacements: 0,
    totalRevenue: 0,
    lastPlacementDate: undefined,
    placementHistory: [],
    preferredDailyRate: { min: 130, max: 160 },
    paymentTerms: 'weekly',
    invoiceContact: 'admin@cedarheights.sch.uk',
    satisfactionRating: undefined
  },
  {
    id: 'sch-008',
    name: 'Victoria Park Academy',
    address: '88 Victoria Street',
    postcode: 'SW1H 0HW',
    headteacher: 'Mr. Andrew Clarke',
    phone: '020 7946 0965',
    email: 'admin@victoriapark.ac.uk',
    lastContact: '2024-01-08',
    subjects: ['Mathematics', 'Physics', 'Computer Science'],
    urgency: 'high',
    distance: 3.8,
    notes: 'STEM department urgently needs teachers for new term. Excellent facilities and competitive rates.',
         callHistory: [
       {
         id: 'call-008-1',
         timestamp: '2024-01-19T15:30:00Z',
         note: 'Spoke with Mr. Clarke about STEM positions. They have brand new science labs and are offering £180/day for experienced teachers. Very keen to work with us.',
         outcome: 'interested',
         duration: 18
       },
       {
         id: 'call-008-2',
         timestamp: '2024-01-15T11:15:00Z',
         note: 'Initial contact about potential partnership. School expanding STEM department.',
         outcome: 'interested',
         duration: 12
       }
     ],
     // Client relationship data
     status: 'active',
     relationshipStart: '2023-08-20',
     totalPlacements: 12,
     activePlacements: 2,
     totalRevenue: 32400,
     lastPlacementDate: '2024-01-08',
     placementHistory: [
       {
         id: 'place-008-1',
         teacherName: 'Michael Thompson',
         teacherId: 'can-007',
         subject: 'Physics',
         startDate: '2024-01-08',
         endDate: '2024-04-05',
         dailyRate: 180,
         status: 'active',
         feedback: 'Excellent STEM background, students love practical experiments',
         rating: 5
       }
     ],
     preferredDailyRate: { min: 170, max: 200 },
     paymentTerms: 'monthly',
     invoiceContact: 'finance@victoriapark.ac.uk',
     satisfactionRating: 4.8
  },
  {
    id: 'sch-009',
    name: 'Maple Grove Infant School',
    address: '34 Maple Road',
    postcode: 'SE22 8EW',
    headteacher: 'Mrs. Patricia Williams',
    phone: '020 7946 0966',
    email: 'head@maplegrove.sch.uk',
    subjects: ['Early Years', 'Reception', 'Year 1'],
    urgency: 'medium',
    distance: 5.9,
    notes: 'Specialist in early years education. Looking for qualified Reception teacher for spring term.',
         callHistory: [
       {
         id: 'call-009-1',
         timestamp: '2024-01-04T09:45:00Z',
         note: 'Discussed early years positions. School has outstanding Ofsted rating. Mrs. Williams very pleasant to work with.',
         outcome: 'interested',
         duration: 14
       }
     ],
     // Client relationship data
     status: 'pending',
     relationshipStart: '2024-01-04',
     totalPlacements: 2,
     activePlacements: 1,
     totalRevenue: 4350,
     lastPlacementDate: '2024-01-04',
     placementHistory: [
       {
         id: 'place-009-1',
         teacherName: 'Sophie Williams',
         teacherId: 'can-017',
         subject: 'Early Years',
         startDate: '2024-01-04',
         endDate: '2024-03-29',
         dailyRate: 135,
         status: 'active',
         feedback: 'Wonderful with young children, excellent early years experience',
         rating: 5
       }
     ],
     preferredDailyRate: { min: 130, max: 150 },
     paymentTerms: 'weekly',
     invoiceContact: 'admin@maplegrove.sch.uk',
     satisfactionRating: 4.9
  },
  {
    id: 'sch-010',
    name: 'Trinity Catholic Secondary',
    address: '67 Trinity Lane',
    postcode: 'NW10 4RT',
    headteacher: 'Father Michael O\'Connor',
    phone: '020 7946 0967',
    email: 'office@trinity-catholic.edu',
    lastContact: '2024-01-06',
    subjects: ['Religious Education', 'History', 'Philosophy'],
    urgency: 'low',
    distance: 8.4,
    notes: 'Catholic school seeking RE teacher with appropriate qualifications. Term-time position.',
         callHistory: [
       {
         id: 'call-010-1',
         timestamp: '2024-01-13T14:20:00Z',
         note: 'Father O\'Connor explained they need RE teacher with Catholic background. Position not urgent but would like to fill by Easter.',
         outcome: 'interested',
         duration: 9
       }
     ],
     // Client relationship data
     status: 'pending',
     relationshipStart: '2024-01-06',
     totalPlacements: 1,
     activePlacements: 0,
     totalRevenue: 2900,
     lastPlacementDate: '2023-11-15',
     placementHistory: [
       {
         id: 'place-010-1',
         teacherName: 'Catherine O\'Brien',
         teacherId: 'can-021',
         subject: 'Religious Education',
         startDate: '2023-11-15',
         endDate: '2023-12-20',
         dailyRate: 145,
         status: 'completed',
         feedback: 'Excellent knowledge of Catholic teaching, students engaged well',
         rating: 4
       }
     ],
     preferredDailyRate: { min: 140, max: 165 },
     paymentTerms: 'end_of_assignment',
     invoiceContact: 'bursar@trinity-catholic.edu',
     satisfactionRating: 4.3
  },
  {
    id: 'sch-011',
    name: 'Eastbrook Community College',
    address: '122 Eastern Avenue',
    postcode: 'E6 2JA',
    headteacher: 'Ms. Priya Patel',
    phone: '020 7946 0968',
    email: 'info@eastbrook.ac.uk',
    subjects: ['Business Studies', 'Economics', 'IT'],
    urgency: 'high',
    distance: 11.2,
    notes: 'Large comprehensive seeking Business Studies teacher. High achieving school with excellent resources.',
    callHistory: [],
    // Client relationship data
    status: 'prospect',
    relationshipStart: undefined,
    totalPlacements: 0,
    activePlacements: 0,
    totalRevenue: 0,
    lastPlacementDate: undefined,
    placementHistory: [],
    preferredDailyRate: { min: 155, max: 185 },
    paymentTerms: 'monthly',
    invoiceContact: 'accounts@eastbrook.ac.uk',
    satisfactionRating: undefined
  },
  {
    id: 'sch-012',
    name: 'Bloomsbury Preparatory',
    address: '15 Bedford Square',
    postcode: 'WC1B 3JA',
    headteacher: 'Dr. Charlotte Ashworth',
    phone: '020 7946 0969',
    email: 'admissions@bloomsbury-prep.edu',
    lastContact: '2023-10-22',
    subjects: ['Classics', 'Latin', 'Ancient History'],
    urgency: 'medium',
    distance: 2.1,
    notes: 'Prestigious prep school in Bloomsbury. Seeking specialist Classics teacher. Excellent salary package.',
         callHistory: [
       {
         id: 'call-012-1',
         timestamp: '2024-01-02T16:00:00Z',
         note: 'Dr. Ashworth very interested in our services. School pays top rates (£200+/day) for right candidates. Looking for Classics specialist.',
         outcome: 'interested',
         duration: 22
       },
       {
         id: 'call-012-2',
         timestamp: '2023-12-18T10:30:00Z',
         note: 'Left message with secretary about potential partnership.',
         outcome: 'callback_requested',
         duration: 2
       }
     ],
     // Client relationship data
     status: 'active',
     relationshipStart: '2023-10-22',
     totalPlacements: 5,
     activePlacements: 1,
     totalRevenue: 22500,
     lastPlacementDate: '2024-01-02',
     placementHistory: [
       {
         id: 'place-012-1',
         teacherName: 'Marcus Thompson',
         teacherId: 'can-022',
         subject: 'Latin',
         startDate: '2024-01-02',
         endDate: '2024-07-19',
         dailyRate: 210,
         status: 'active',
         feedback: 'Outstanding classical scholar, pupils making excellent progress',
         rating: 5
       }
     ],
     preferredDailyRate: { min: 200, max: 250 },
     paymentTerms: 'monthly',
     invoiceContact: 'finance@bloomsbury-prep.edu',
     satisfactionRating: 4.9
  },
  {
    id: 'sch-013',
    name: 'Woodlands Special School',
    address: '78 Forest Hill Road',
    postcode: 'SE23 3LE',
    headteacher: 'Mr. David Thompson',
    phone: '020 7946 0970',
    email: 'office@woodlands-special.sch.uk',
    subjects: ['SEND', 'Life Skills', 'Communication'],
    urgency: 'high',
    distance: 9.7,
    notes: 'Special needs school requiring qualified SEND teachers. Experience with autism spectrum essential.',
         callHistory: [
       {
         id: 'call-013-1',
         timestamp: '2024-01-17T13:15:00Z',
         note: 'Mr. Thompson explained urgent need for SEND specialists. School works with children aged 11-16 with complex needs. Very rewarding environment.',
         outcome: 'interested',
         duration: 16
       }
     ],
     // Client relationship data
     status: 'active',
     relationshipStart: '2023-03-15',
     totalPlacements: 6,
     activePlacements: 2,
     totalRevenue: 18900,
     lastPlacementDate: '2024-01-17',
     placementHistory: [
       {
         id: 'place-013-1',
         teacherName: 'Lisa Johnson',
         teacherId: 'can-023',
         subject: 'SEND',
         startDate: '2024-01-17',
         endDate: '2024-04-05',
         dailyRate: 175,
         status: 'active',
         feedback: 'Exceptional with ASD students, very patient and understanding',
         rating: 5
       }
     ],
     preferredDailyRate: { min: 160, max: 190 },
     paymentTerms: 'weekly',
     invoiceContact: 'finance@woodlands-special.sch.uk',
     satisfactionRating: 4.8
  },
  {
    id: 'sch-014',
    name: 'North London Arts Academy',
    address: '92 Creative Quarter',
    postcode: 'N4 3HQ',
    headteacher: 'Ms. Isabella Rodriguez',
    phone: '020 7946 0971',
    email: 'hello@nlarts.ac.uk',
    subjects: ['Art', 'Music', 'Dance', 'Drama'],
    urgency: 'medium',
    distance: 6.3,
    notes: 'Creative arts specialist school. Looking for passionate teachers in performing and visual arts.',
         callHistory: [
       {
         id: 'call-014-1',
         timestamp: '2024-01-15T11:30:00Z',
         note: 'Ms. Rodriguez enthusiastic about partnership. School has excellent arts facilities and strong reputation. Looking for Music teacher specifically.',
         outcome: 'interested',
         duration: 13
       },
       {
         id: 'call-014-2',
         timestamp: '2024-01-10T15:45:00Z',
         note: 'Initial discussion about arts teaching positions. Very positive response.',
         outcome: 'interested',
         duration: 8
       }
     ],
     // Client relationship data
     status: 'active',
     relationshipStart: '2023-06-10',
     totalPlacements: 7,
     activePlacements: 1,
     totalRevenue: 16800,
     lastPlacementDate: '2024-01-15',
     placementHistory: [
       {
         id: 'place-014-1',
         teacherName: 'Elena Rossi',
         teacherId: 'can-024',
         subject: 'Music',
         startDate: '2024-01-15',
         endDate: '2024-04-12',
         dailyRate: 165,
         status: 'active',
         feedback: 'Inspiring music teacher, students love her contemporary approach',
         rating: 5
       }
     ],
     preferredDailyRate: { min: 150, max: 180 },
     paymentTerms: 'monthly',
     invoiceContact: 'admin@nlarts.ac.uk',
     satisfactionRating: 4.7
  },
  {
    id: 'sch-015',
    name: 'Riverside Sixth Form College',
    address: '156 Thames View',
    postcode: 'SE16 7PQ',
    headteacher: 'Dr. James Mitchell',
    phone: '020 7946 0972',
    email: 'principal@riverside-sfc.ac.uk',
    lastContact: '2023-09-14',
    subjects: ['A-Level Mathematics', 'Further Mathematics', 'Statistics'],
    urgency: 'low',
    distance: 4.5,
    notes: 'Sixth form college with high academic standards. Seeking A-Level Maths specialists.',
         callHistory: [
       {
         id: 'call-015-1',
         timestamp: '2023-12-22T12:00:00Z',
         note: 'Dr. Mitchell interested in occasional cover for A-Level Maths. Students achieve excellent results. Would consider permanent partnership.',
         outcome: 'interested',
         duration: 11
       }
     ],
     // Client relationship data
     status: 'inactive',
     relationshipStart: '2022-09-01',
     totalPlacements: 3,
     activePlacements: 0,
     totalRevenue: 7200,
     lastPlacementDate: '2023-07-19',
     placementHistory: [
       {
         id: 'place-015-1',
         teacherName: 'Dr. Amanda Foster',
         teacherId: 'can-025',
         subject: 'A-Level Mathematics',
         startDate: '2023-05-01',
         endDate: '2023-07-19',
         dailyRate: 180,
         status: 'completed',
         feedback: 'Excellent A-Level results, students achieved top grades',
         rating: 5
       }
     ],
     preferredDailyRate: { min: 170, max: 200 },
     paymentTerms: 'end_of_assignment',
     invoiceContact: 'finance@riverside-sfc.ac.uk',
     satisfactionRating: 4.6
  },
  {
    id: 'sch-016',
    name: 'Kensington International School',
    address: '25 Prince Consort Road',
    postcode: 'SW7 2AZ',
    headteacher: 'Mrs. Sophia Chen-Williams',
    phone: '020 7946 0973',
    email: 'hr@kensington-intl.edu',
    subjects: ['Mandarin', 'Japanese', 'International Baccalaureate'],
    urgency: 'high',
    distance: 1.9,
    notes: 'Elite international school in South Kensington. Seeks native speakers for language programs and IB qualified teachers.',
         callHistory: [
       {
         id: 'call-016-1',
         timestamp: '2024-01-20T10:15:00Z',
         note: 'Mrs. Chen-Williams very interested in partnership. School pays premium rates (£220/day) for qualified international teachers. Need Mandarin teacher urgently.',
         outcome: 'interested',
         duration: 20
       }
     ],
     // Client relationship data
     status: 'active',
     relationshipStart: '2023-01-15',
     totalPlacements: 9,
     activePlacements: 2,
     totalRevenue: 37800,
     lastPlacementDate: '2024-01-20',
     placementHistory: [
       {
         id: 'place-016-1',
         teacherName: 'Sarah Chen',
         teacherId: 'can-006',
         subject: 'Mandarin',
         startDate: '2024-01-20',
         endDate: '2024-07-19',
         dailyRate: 220,
         status: 'active',
         feedback: 'Native speaker with excellent IB experience, students excelling',
         rating: 5
       }
     ],
     preferredDailyRate: { min: 200, max: 250 },
     paymentTerms: 'monthly',
     invoiceContact: 'finance@kensington-intl.edu',
     satisfactionRating: 4.9
  },
  {
    id: 'sch-017',
    name: 'Hampstead Garden Primary',
    address: '41 Garden Walk',
    postcode: 'NW3 7UX',
    headteacher: 'Mr. Oliver Barnes',
    phone: '020 7946 0974',
    email: 'office@hampstead-garden.sch.uk',
    subjects: ['Year 5', 'Year 6', 'SATs Preparation'],
    urgency: 'medium',
    distance: 7.8,
    notes: 'Well-regarded primary in Hampstead. Focus on SATs preparation and transition to secondary.',
         callHistory: [
       {
         id: 'call-017-1',
         timestamp: '2024-01-06T14:30:00Z',
         note: 'Mr. Barnes explained they occasionally need cover for Year 5/6. School has high expectations and supportive parent community.',
         outcome: 'callback_requested',
         duration: 7
       }
     ],
     // Client relationship data
     status: 'pending',
     relationshipStart: '2024-01-06',
     totalPlacements: 1,
     activePlacements: 0,
     totalRevenue: 1650,
     lastPlacementDate: '2023-12-15',
     placementHistory: [
       {
         id: 'place-017-1',
         teacherName: 'Eleanor White',
         teacherId: 'can-026',
         subject: 'Year 6',
         startDate: '2023-12-15',
         endDate: '2023-12-22',
         dailyRate: 150,
         status: 'completed',
         feedback: 'Excellent SATs preparation, very professional',
         rating: 4
       }
     ],
     preferredDailyRate: { min: 145, max: 175 },
     paymentTerms: 'weekly',
     invoiceContact: 'admin@hampstead-garden.sch.uk',
     satisfactionRating: 4.4
  }
]

// Mock Candidates Data
export const mockCandidates: Candidate[] = [
  {
    id: 'can-001',
    name: 'James Mitchell',
    email: 'james.mitchell@email.com',
    phone: '07700 900123',
    subjects: ['Mathematics', 'Physics'],
    experience: 5,
    dailyRate: 165,
    location: 'Central London',
    postcode: 'W1A 0AX',
    availability: 'available',
    rating: 4.8,
    lastContact: '2024-01-14',
    notes: 'Excellent references from previous placements',
    qualifications: ['PGCE Mathematics', 'BSc Physics', 'QTS']
  },
  {
    id: 'can-002',
    name: 'Sophie Williams',
    email: 'sophie.williams@email.com',
    phone: '07700 900124',
    subjects: ['English', 'Drama'],
    experience: 3,
    dailyRate: 145,
    location: 'North London',
    postcode: 'N1 2AB',
    availability: 'interviewing',
    rating: 4.5,
    lastContact: '2024-01-13',
    notes: 'Currently interviewing with Oakwood Academy',
    qualifications: ['PGCE English', 'BA English Literature', 'QTS']
  },
  {
    id: 'can-003',
    name: 'Robert Garcia',
    email: 'robert.garcia@email.com',
    phone: '07700 900125',
    subjects: ['Science', 'Chemistry', 'Biology'],
    experience: 8,
    dailyRate: 170,
    location: 'South London',
    postcode: 'SE1 0AA',
    availability: 'available',
    rating: 4.9,
    lastContact: '2024-01-16',
    notes: 'Head of Science experience, looking for leadership role',
    qualifications: ['PGCE Science', 'MSc Chemistry', 'QTS']
  },
  {
    id: 'can-004',
    name: 'Anna Thompson',
    email: 'anna.thompson@email.com',
    phone: '07700 900126',
    subjects: ['Art', 'Design Technology'],
    experience: 2,
    dailyRate: 125,
    location: 'East London',
    postcode: 'E1 6GH',
    availability: 'placed',
    rating: 4.2,
    lastContact: '2024-01-10',
    notes: 'Recently placed at Riverside Community School',
    qualifications: ['PGCE Art & Design', 'BA Fine Art', 'QTS']
  },
  {
    id: 'can-005',
    name: 'David Kumar',
    email: 'david.kumar@email.com',
    phone: '07700 900127',
    subjects: ['History', 'Geography', 'Politics'],
    experience: 6,
    dailyRate: 155,
    location: 'West London',
    postcode: 'W2 3CD',
    availability: 'available',
    rating: 4.6,
    lastContact: '2024-01-15',
    notes: 'Specializes in GCSE and A-Level teaching',
    qualifications: ['PGCE History', 'MA History', 'QTS']
  },
  // Additional candidates for better geographic coverage
  {
    id: 'can-006',
    name: 'Sarah Chen',
    email: 'sarah.chen@email.com',
    phone: '07700 900128',
    subjects: ['Mandarin', 'Japanese', 'International Baccalaureate'],
    experience: 8,
    dailyRate: 190,
    location: 'Central London',
    postcode: 'SW7 2AZ',
    availability: 'available',
    rating: 4.9,
    lastContact: '2024-01-16',
    notes: 'Native Mandarin speaker with IB qualification. Perfect for international schools.',
    qualifications: ['BA Linguistics', 'IB Teaching Certificate', 'QTS']
  },
  {
    id: 'can-007',
    name: 'Michael Thompson',
    email: 'michael.thompson@email.com',
    phone: '07700 900129',
    subjects: ['Physics', 'Computer Science', 'Mathematics'],
    experience: 4,
    dailyRate: 165,
    location: 'Central London',
    postcode: 'SW1H 0HW',
    availability: 'available',
    rating: 4.7,
    lastContact: '2024-01-14',
    notes: 'Strong STEM background, experience with new tech labs',
    qualifications: ['MSc Physics', 'PGCE Science', 'QTS']
  },
  {
    id: 'can-008',
    name: 'Emma Rodriguez',
    email: 'emma.rodriguez@email.com',
    phone: '07700 900130',
    subjects: ['Art', 'Music', 'Drama'],
    experience: 5,
    dailyRate: 150,
    location: 'North London',
    postcode: 'N4 3HQ',
    availability: 'available',
    rating: 4.8,
    lastContact: '2024-01-13',
    notes: 'Creative arts specialist with performance background',
    qualifications: ['BA Fine Arts', 'PGCE Art & Music', 'QTS']
  },
  {
    id: 'can-009',
    name: 'Oliver Barnes',
    email: 'oliver.barnes@email.com',
    phone: '07700 900131',
    subjects: ['Business Studies', 'Economics', 'IT'],
    experience: 7,
    dailyRate: 160,
    location: 'East London',
    postcode: 'E6 2JA',
    availability: 'available',
    rating: 4.5,
    lastContact: '2024-01-12',
    notes: 'Former business professional turned teacher. Real-world experience.',
    qualifications: ['MBA', 'PGCE Business', 'QTS']
  },
  {
    id: 'can-010',
    name: 'Lucy Williams',
    email: 'lucy.williams@email.com',
    phone: '07700 900132',
    subjects: ['Early Years', 'Reception', 'Year 1'],
    experience: 3,
    dailyRate: 140,
    location: 'South London',
    postcode: 'SE22 8EW',
    availability: 'available',
    rating: 4.6,
    lastContact: '2024-01-11',
    notes: 'Passionate about early years development. Outstanding with young children.',
    qualifications: ['BA Early Childhood', 'PGCE Primary', 'QTS']
  },
  {
    id: 'can-011',
    name: 'Dr. Marcus Alexander',
    email: 'marcus.alexander@email.com',
    phone: '07700 900133',
    subjects: ['Classics', 'Latin', 'Ancient History'],
    experience: 12,
    dailyRate: 200,
    location: 'Central London',
    postcode: 'WC1B 3JA',
    availability: 'available',
    rating: 4.9,
    lastContact: '2024-01-10',
    notes: 'PhD in Classics from Oxford. Specialist in ancient languages.',
    qualifications: ['PhD Classics', 'MA Latin', 'QTS']
  },
  {
    id: 'can-012',
    name: 'Jennifer Clarke',
    email: 'jennifer.clarke@email.com',
    phone: '07700 900134',
    subjects: ['SEND', 'Life Skills', 'Communication'],
    experience: 6,
    dailyRate: 155,
    location: 'South London',
    postcode: 'SE23 3LE',
    availability: 'available',
    rating: 4.8,
    lastContact: '2024-01-09',
    notes: 'Specialist in autism spectrum disorders. Very patient and skilled.',
    qualifications: ['MA Special Education', 'PGCE SEND', 'QTS']
  },
  {
    id: 'can-013',
    name: 'Thomas Mitchell',
    email: 'thomas.mitchell@email.com',
    phone: '07700 900135',
    subjects: ['Religious Education', 'History', 'Philosophy'],
    experience: 9,
    dailyRate: 165,
    location: 'North West London',
    postcode: 'NW10 4RT',
    availability: 'available',
    rating: 4.7,
    lastContact: '2024-01-08',
    notes: 'Catholic background, strong philosophical training',
    qualifications: ['MA Theology', 'PGCE Religious Studies', 'QTS']
  },
  {
    id: 'can-014',
    name: 'Isabella Santos',
    email: 'isabella.santos@email.com',
    phone: '07700 900136',
    subjects: ['French', 'Spanish', 'German'],
    experience: 4,
    dailyRate: 150,
    location: 'West London',
    postcode: 'W2 3CD',
    availability: 'available',
    rating: 4.6,
    lastContact: '2024-01-07',
    notes: 'Native Spanish speaker, fluent in French and German',
    qualifications: ['BA Modern Languages', 'PGCE MFL', 'QTS']
  },
  {
    id: 'can-015',
    name: 'Dr. Rachel Green',
    email: 'rachel.green@email.com',
    phone: '07700 900137',
    subjects: ['Chemistry', 'Biology', 'Science'],
    experience: 11,
    dailyRate: 185,
    location: 'South East London',
    postcode: 'SE10 8UJ',
    availability: 'available',
    rating: 4.9,
    lastContact: '2024-01-06',
    notes: 'PhD in Biochemistry. Excellent for A-Level and undergraduate preparation.',
    qualifications: ['PhD Biochemistry', 'PGCE Science', 'QTS']
  },
  {
    id: 'can-016',
    name: 'Andrew Foster',
    email: 'andrew.foster@email.com',
    phone: '07700 900138',
    subjects: ['Mathematics', 'Further Mathematics', 'Statistics'],
    experience: 8,
    dailyRate: 170,
    location: 'South East London',
    postcode: 'SE16 7PQ',
    availability: 'available',
    rating: 4.8,
    lastContact: '2024-01-05',
    notes: 'Specialist in A-Level Further Maths. High achiever support.',
    qualifications: ['MSc Mathematics', 'PGCE Mathematics', 'QTS']
  },
  {
    id: 'can-017',
    name: 'Sophie Williams',
    email: 'sophie.williams2@email.com',
    phone: '07700 900139',
    subjects: ['Primary', 'Year 5', 'Year 6'],
    experience: 5,
    dailyRate: 145,
    location: 'North London',
    postcode: 'NW3 7UX',
    availability: 'available',
    rating: 4.7,
    lastContact: '2024-01-04',
    notes: 'Excellent SATs results track record. Strong with transition prep.',
    qualifications: ['BA Primary Education', 'PGCE Primary', 'QTS']
  },
  {
    id: 'can-018',
    name: 'Hassan Ali',
    email: 'hassan.ali@email.com',
    phone: '07700 900140',
    subjects: ['ICT', 'Computer Science', 'Mathematics'],
    experience: 6,
    dailyRate: 155,
    location: 'West London',
    postcode: 'W3 7QR',
    availability: 'available',
    rating: 4.6,
    lastContact: '2024-01-03',
    notes: 'Former software developer. Great with coding and digital literacy.',
    qualifications: ['BSc Computer Science', 'PGCE Computing', 'QTS']
  },
  {
    id: 'can-019',
    name: 'Caroline Davis',
    email: 'caroline.davis@email.com',
    phone: '07700 900141',
    subjects: ['English', 'Drama', 'Media Studies'],
    experience: 7,
    dailyRate: 160,
    location: 'East London',
    postcode: 'E1 6GH',
    availability: 'available',
    rating: 4.8,
    lastContact: '2024-01-02',
    notes: 'Strong track record with GCSE and A-Level English Literature',
    qualifications: ['MA English Literature', 'PGCE English', 'QTS']
  },
  {
    id: 'can-020',
    name: 'Mark Johnson',
    email: 'mark.johnson@email.com',
    phone: '07700 900142',
    subjects: ['Design Technology', 'Art', 'Engineering'],
    experience: 4,
    dailyRate: 145,
    location: 'East London',
    postcode: 'E1 6GH',
    availability: 'available',
    rating: 4.5,
    lastContact: '2024-01-01',
    notes: 'Hands-on teaching style. Great with practical projects.',
    qualifications: ['BEng Design', 'PGCE Design Technology', 'QTS']
  },
  // Some candidates with different availability status for variety
  {
    id: 'can-021',
    name: 'Priya Patel',
    email: 'priya.patel@email.com',
    phone: '07700 900143',
    subjects: ['Mathematics', 'Physics', 'Chemistry'],
    experience: 10,
    dailyRate: 175,
    location: 'Central London',
    postcode: 'WC1B 3JA',
    availability: 'interviewing',
    rating: 4.9,
    lastContact: '2024-01-15',
    notes: 'Currently in interview process with another school',
    qualifications: ['MSc Physics', 'PGCE Science', 'QTS']
  },
  {
    id: 'can-022',
    name: 'Benjamin Wright',
    email: 'benjamin.wright@email.com',
    phone: '07700 900144',
    subjects: ['Geography', 'Environmental Science', 'Geology'],
    experience: 3,
    dailyRate: 140,
    location: 'North London',
    postcode: 'N8 9LM',
    availability: 'placed',
    rating: 4.4,
    lastContact: '2024-01-10',
    notes: 'Recently placed at Cedar Heights Primary',
    qualifications: ['BSc Geography', 'PGCE Geography', 'QTS']
  }
]

// Mock Jobs Data
export const mockJobs: Job[] = [
  {
    id: 'job-001',
    title: 'Year 3 Teacher',
    school: 'St. Mary\'s Primary School',
    subject: 'Primary',
    startDate: '2024-01-22',
    endDate: '2024-07-19',
    dailyRate: 150,
    description: 'Full-time Year 3 class teacher position. Experience with KS1/KS2 curriculum essential.',
    requirements: ['QTS', 'Primary teaching experience', 'Enhanced DBS'],
    status: 'open'
  },
  {
    id: 'job-002',
    title: 'English Teacher',
    school: 'Oakwood Secondary Academy',
    subject: 'English',
    startDate: '2024-02-05',
    endDate: '2024-12-20',
    dailyRate: 160,
    description: 'Maternity cover for English department. GCSE and A-Level experience preferred.',
    requirements: ['PGCE English', 'Secondary experience', 'QTS'],
    status: 'open'
  },
  {
    id: 'job-003',
    title: 'Science Teacher',
    school: 'Greenwich Grammar School',
    subject: 'Science',
    startDate: '2024-01-29',
    endDate: '2024-06-21',
    dailyRate: 170,
    description: 'Chemistry specialist required for GCSE and A-Level classes.',
    requirements: ['PGCE Science', 'Chemistry degree', 'QTS'],
    status: 'filled'
  }
]

export const mockBookings: Booking[] = [
  {
    id: '1',
    type: 'placement',
    title: 'Sarah Johnson - Maths Teacher Placement',
    description: 'Long-term supply placement for Year 7-11 Mathematics',
    date: '2024-01-15',
    time: '08:30',
    duration: 480, // 8 hours
    status: 'confirmed',
    participants: {
      teacher: 'Sarah Johnson',
      school: 'St. Mary\'s Primary School',
      contact: 'Mrs. Thompson (Head Teacher)'
    },
    location: 'St. Mary\'s Primary School, SW1A 1AA',
    notes: 'First day of placement. Ensure Sarah has all necessary materials.',
    reminder: true,
    priority: 'high'
  },
  {
    id: '2',
    type: 'interview',
    title: 'Interview - James Mitchell',
    description: 'Initial interview for Science teaching positions',
    date: '2024-01-16',
    time: '14:00',
    duration: 60,
    status: 'confirmed',
    participants: {
      teacher: 'James Mitchell',
      contact: 'Rachel Green (Recruitment Team)'
    },
    location: 'Payra Office, Meeting Room 1',
    notes: 'Review CV and prepare science-specific questions',
    reminder: true,
    priority: 'medium'
  },
  {
    id: '3',
    type: 'school_visit',
    title: 'Site Visit - Greenwood Secondary',
    description: 'Initial consultation for upcoming English department needs',
    date: '2024-01-17',
    time: '10:00',
    duration: 120,
    status: 'confirmed',
    participants: {
      school: 'Greenwood Secondary School',
      contact: 'Mr. Davis (Head of English)'
    },
    location: 'Greenwood Secondary School, N1 2AB',
    notes: 'Discuss term-time and supply requirements',
    reminder: true,
    priority: 'high'
  },
  {
    id: '4',
    type: 'follow_up',
    title: 'Follow-up - Emma Wilson Placement',
    description: 'Check on first week of History placement',
    date: '2024-01-12',
    time: '11:30',
    duration: 30,
    status: 'completed',
    participants: {
      teacher: 'Emma Wilson',
      school: 'Riverside Academy',
      contact: 'Ms. Clarke (Deputy Head)'
    },
    location: 'Phone Call',
    notes: 'Placement going well, teacher settled in nicely',
    reminder: true,
    priority: 'medium'
  },
  {
    id: '5',
    type: 'interview',
    title: 'Panel Interview - Michael Brown',
    description: 'Final stage interview for PE teaching role',
    date: '2024-01-19',
    time: '15:30',
    duration: 90,
    status: 'confirmed',
    participants: {
      teacher: 'Michael Brown',
      school: 'Oakwood Primary',
      contact: 'Mr. Taylor (Headteacher)'
    },
    location: 'Oakwood Primary School',
    notes: 'Prepare practical demonstration materials',
    reminder: true,
    priority: 'high'
  },
  {
    id: '6',
    type: 'training',
    title: 'Safeguarding Training - New Teachers',
    description: 'Mandatory safeguarding training for new recruits',
    date: '2024-01-22',
    time: '09:00',
    duration: 180,
    status: 'confirmed',
    participants: {
      contact: 'Training Provider'
    },
    location: 'Payra Training Center',
    notes: 'Confirm attendance of 5 new teachers',
    reminder: true,
    priority: 'medium'
  },
  {
    id: '7',
    type: 'placement',
    title: 'David Smith - Art Teacher Placement',
    description: 'Maternity cover for Art department',
    date: '2024-01-23',
    time: '08:45',
    duration: 420, // 7 hours
    status: 'confirmed',
    participants: {
      teacher: 'David Smith',
      school: 'Hillside Comprehensive',
      contact: 'Mrs. Anderson (Head of Arts)'
    },
    location: 'Hillside Comprehensive, SE10 3CD',
    notes: 'Long-term placement, 6 months minimum',
    reminder: true,
    priority: 'high'
  },
  {
    id: '8',
    type: 'school_visit',
    title: 'Quarterly Review - St. Joseph\'s',
    description: 'Quarterly service review and planning meeting',
    date: '2024-01-24',
    time: '13:00',
    duration: 90,
    status: 'pending',
    participants: {
      school: 'St. Joseph\'s Catholic School',
      contact: 'Sister Margaret (Principal)'
    },
    location: 'St. Joseph\'s Catholic School',
    notes: 'Review performance metrics and plan for next quarter',
    reminder: false,
    priority: 'medium'
  },
  {
    id: '9',
    type: 'follow_up',
    title: 'Check-in - Lisa Parker',
    description: 'Monthly check-in with long-term placement',
    date: '2024-01-10',
    time: '16:00',
    duration: 45,
    status: 'completed',
    participants: {
      teacher: 'Lisa Parker',
      school: 'Meadowbrook Primary',
      contact: 'Mr. Johnson (Deputy Head)'
    },
    location: 'Phone Call',
    notes: 'Performance excellent, very satisfied with placement',
    reminder: false,
    priority: 'low'
  },
  {
    id: '10',
    type: 'interview',
    title: 'Phone Interview - Rachel Green',
    description: 'Initial screening for French teaching positions',
    date: '2024-01-26',
    time: '10:30',
    duration: 30,
    status: 'pending',
    participants: {
      teacher: 'Rachel Green',
      contact: 'Tom Wilson (Senior Consultant)'
    },
    location: 'Phone Call',
    notes: 'Language proficiency assessment required',
    reminder: true,
    priority: 'medium'
  },
  {
    id: '11',
    type: 'placement',
    title: 'Mark Wilson - PE Teacher Start',
    description: 'First day of sports department placement',
    date: '2024-01-08',
    time: '08:00',
    duration: 450,
    status: 'completed',
    participants: {
      teacher: 'Mark Wilson',
      school: 'Eastfield Academy',
      contact: 'Mr. Roberts (Head of PE)'
    },
    location: 'Eastfield Academy, E2 4GH',
    notes: 'Successful first day, excellent rapport with students',
    reminder: false,
    priority: 'low'
  },
  {
    id: '12',
    type: 'interview',
    title: 'Initial Interview - Kate Brown',
    description: 'Screening interview for primary positions',
    date: '2024-01-05',
    time: '15:00',
    duration: 45,
    status: 'completed',
    participants: {
      teacher: 'Kate Brown',
      contact: 'Sarah Mitchell (Consultant)'
    },
    location: 'Payra Office',
    notes: 'Strong candidate, recommended for school interviews',
    reminder: false,
    priority: 'medium'
  },
  {
    id: '13',
    type: 'placement',
    title: 'Helen Davis - Maths Teacher Long-term',
    description: 'Year 9-11 Mathematics teacher for rest of academic year',
    date: '2024-01-29',
    time: '08:30',
    duration: 450,
    status: 'confirmed',
    participants: {
      teacher: 'Helen Davis',
      school: 'Westfield Grammar School',
      contact: 'Dr. Smith (Head of Maths)'
    },
    location: 'Westfield Grammar School, W3 7PQ',
    notes: 'Covering for teacher on long-term sick leave',
    reminder: true,
    priority: 'high'
  },
  {
    id: '14',
    type: 'interview',
    title: 'Second Interview - Tom Richardson',
    description: 'Final stage interview for History department',
    date: '2024-01-30',
    time: '10:00',
    duration: 75,
    status: 'confirmed',
    participants: {
      teacher: 'Tom Richardson',
      school: 'St. Andrews Secondary',
      contact: 'Mrs. Phillips (Head of Humanities)'
    },
    location: 'St. Andrews Secondary School',
    notes: 'Demo lesson required - Medieval History topic',
    reminder: true,
    priority: 'medium'
  },
  {
    id: '15',
    type: 'school_visit',
    title: 'New Client Meeting - Riverside Primary',
    description: 'Initial consultation for supply teaching needs',
    date: '2024-01-31',
    time: '14:00',
    duration: 90,
    status: 'confirmed',
    participants: {
      school: 'Riverside Primary School',
      contact: 'Mr. Evans (Headteacher)'
    },
    location: 'Riverside Primary School, SE8 4NP',
    notes: 'Potential new client, discuss ongoing supply needs',
    reminder: true,
    priority: 'high'
  },
  {
    id: '16',
    type: 'follow_up',
    title: 'Weekly Check - Sarah Mitchell Placement',
    description: 'Week 2 follow-up for new maths placement',
    date: '2024-02-01',
    time: '16:30',
    duration: 30,
    status: 'pending',
    participants: {
      teacher: 'Sarah Mitchell',
      school: 'Greenwood Academy',
      contact: 'Ms. Roberts (Deputy Head)'
    },
    location: 'Phone Call',
    notes: 'Check adaptation and any support needs',
    reminder: true,
    priority: 'medium'
  },
  {
    id: '17',
    type: 'training',
    title: 'Classroom Management Workshop',
    description: 'CPD session for new supply teachers',
    date: '2024-02-02',
    time: '09:30',
    duration: 240,
    status: 'confirmed',
    participants: {
      contact: 'Educational Training Solutions'
    },
    location: 'Payra Training Center',
    notes: '8 teachers registered for this session',
    reminder: true,
    priority: 'medium'
  },
  {
    id: '18',
    type: 'placement',
    title: 'Emergency Cover - Science Department',
    description: 'Urgent Year 10 Chemistry cover needed',
    date: '2024-02-05',
    time: '08:00',
    duration: 420,
    status: 'pending',
    participants: {
      teacher: 'Dr. Amanda Foster',
      school: 'Elmwood Comprehensive',
      contact: 'Mr. Taylor (Head of Science)'
    },
    location: 'Elmwood Comprehensive School, N5 2RT',
    notes: 'Teacher called in sick, urgent cover needed',
    reminder: true,
    priority: 'high'
  },
  {
    id: '19',
    type: 'interview',
    title: 'Phone Screening - Claire Williams',
    description: 'Initial assessment for English positions',
    date: '2024-02-06',
    time: '11:00',
    duration: 45,
    status: 'confirmed',
    participants: {
      teacher: 'Claire Williams',
      contact: 'Rachel Green (Senior Consultant)'
    },
    location: 'Phone Call',
    notes: 'Recently qualified teacher, first interview',
    reminder: true,
    priority: 'low'
  },
  {
    id: '20',
    type: 'school_visit',
    title: 'Contract Review - St. Bartholomew\'s',
    description: 'Annual contract renewal meeting',
    date: '2024-02-07',
    time: '13:30',
    duration: 120,
    status: 'confirmed',
    participants: {
      school: 'St. Bartholomew\'s College',
      contact: 'Sister Catherine (Principal)'
    },
    location: 'St. Bartholomew\'s College, SW7 3AB',
    notes: 'Discuss rates and service levels for next year',
    reminder: true,
    priority: 'high'
  },
  {
    id: '21',
    type: 'placement',
    title: 'Art Teacher Maternity Cover',
    description: 'Full-time Art department position',
    date: '2024-02-12',
    time: '08:45',
    duration: 450,
    status: 'confirmed',
    participants: {
      teacher: 'Marcus Thompson',
      school: 'Hillcrest Academy',
      contact: 'Mrs. Jenkins (Head of Arts)'
    },
    location: 'Hillcrest Academy, E4 7QW',
    notes: '6-month maternity cover starting February',
    reminder: true,
    priority: 'medium'
  },
  {
    id: '22',
    type: 'follow_up',
    title: 'Monthly Review - Long-term Placements',
    description: 'Check-in with 5 long-term supply teachers',
    date: '2024-02-14',
    time: '15:00',
    duration: 90,
    status: 'pending',
    participants: {
      contact: 'Tom Wilson (Account Manager)'
    },
    location: 'Teams Meeting',
    notes: 'Group call with all long-term placements',
    reminder: false,
    priority: 'low'
  },
  {
    id: '23',
    type: 'interview',
    title: 'Assessment Day - Graduate Trainees',
    description: 'Group interview for new graduate teachers',
    date: '2024-02-15',
    time: '09:00',
    duration: 300,
    status: 'confirmed',
    participants: {
      contact: 'HR Assessment Team'
    },
    location: 'Payra Head Office',
    notes: '12 candidates attending, various subjects',
    reminder: true,
    priority: 'medium'
  },
  {
    id: '24',
    type: 'training',
    title: 'SEND Awareness Training',
    description: 'Special Educational Needs training for teachers',
    date: '2024-02-16',
    time: '10:00',
    duration: 180,
    status: 'confirmed',
    participants: {
      contact: 'SEND Training Specialists'
    },
    location: 'Community Education Center',
    notes: 'Mandatory for teachers working with SEND students',
    reminder: true,
    priority: 'medium'
  },
  // Past bookings
  {
    id: '25',
    type: 'placement',
    title: 'Geography Teacher Supply',
    description: 'Short-term geography cover',
    date: '2024-01-03',
    time: '08:30',
    duration: 420,
    status: 'completed',
    participants: {
      teacher: 'Peter Johnson',
      school: 'Meadowlands High School',
      contact: 'Mr. Clarke (Head of Geography)'
    },
    location: 'Meadowlands High School, SE12 8UV',
    notes: 'Excellent feedback from school and students',
    reminder: false,
    priority: 'low'
  },
  {
    id: '26',
    type: 'interview',
    title: 'Interview - Maria Rodriguez',
    description: 'Spanish teacher assessment',
    date: '2024-01-04',
    time: '14:30',
    duration: 60,
    status: 'completed',
    participants: {
      teacher: 'Maria Rodriguez',
      contact: 'Sarah Mitchell (Language Specialist)'
    },
    location: 'Payra Office',
    notes: 'Native speaker, excellent qualifications, hired',
    reminder: false,
    priority: 'medium'
  },
  {
    id: '27',
    type: 'school_visit',
    title: 'Term Planning - Oakfield Primary',
    description: 'Spring term supply planning meeting',
    date: '2024-01-06',
    time: '11:00',
    duration: 75,
    status: 'completed',
    participants: {
      school: 'Oakfield Primary School',
      contact: 'Mrs. Patterson (Deputy Head)'
    },
    location: 'Oakfield Primary School, NW3 2MN',
    notes: 'Confirmed 3 long-term placements for spring term',
    reminder: false,
    priority: 'medium'
  },
  {
    id: '28',
    type: 'follow_up',
    title: 'End of Placement Review - John Smith',
    description: 'Final review for completed IT placement',
    date: '2024-01-07',
    time: '15:30',
    duration: 45,
    status: 'completed',
    participants: {
      teacher: 'John Smith',
      school: 'Technology College',
      contact: 'Dr. Williams (Head of IT)'
    },
    location: 'Phone Call',
    notes: 'Outstanding performance, school wants to rehire',
    reminder: false,
    priority: 'low'
  },
  {
    id: '29',
    type: 'training',
    title: 'Induction Day - New Recruits',
    description: 'Welcome and orientation for new teachers',
    date: '2024-01-09',
    time: '09:00',
    duration: 360,
    status: 'completed',
    participants: {
      contact: 'Payra Training Team'
    },
    location: 'Payra Training Center',
    notes: '15 new teachers completed induction successfully',
    reminder: false,
    priority: 'medium'
  },
  {
    id: '30',
    type: 'placement',
    title: 'Music Teacher Holiday Cover',
    description: 'One week music department cover',
    date: '2024-01-11',
    time: '09:00',
    duration: 300,
    status: 'completed',
    participants: {
      teacher: 'Sophie Turner',
      school: 'Harmony Arts School',
      contact: 'Ms. Bell (Head of Music)'
    },
    location: 'Harmony Arts School, W8 5JL',
    notes: 'Covered both practical and theory lessons excellently',
    reminder: false,
    priority: 'low'
  },
  // Outstanding bookings (overdue or needing attention)
  {
    id: '31',
    type: 'follow_up',
    title: 'OVERDUE: Weekly Check - Alex Turner',
    description: 'Missed weekly check-in call',
    date: '2024-01-13',
    time: '10:30',
    duration: 30,
    status: 'confirmed',
    participants: {
      teacher: 'Alex Turner',
      school: 'Northview Secondary',
      contact: 'Mr. Brown (Head of PE)'
    },
    location: 'Phone Call',
    notes: 'Teacher hasn\'t responded to calls this week',
    reminder: true,
    priority: 'high'
  },
  {
    id: '32',
    type: 'school_visit',
    title: 'URGENT: Issue Resolution - Parkland School',
    description: 'Address complaint about supply teacher',
    date: '2024-01-14',
    time: '09:00',
    duration: 90,
    status: 'pending',
    participants: {
      school: 'Parkland Primary School',
      contact: 'Mrs. Davies (Headteacher)'
    },
    location: 'Parkland Primary School, SW9 4RN',
    notes: 'Urgent meeting to resolve issues with current placement',
    reminder: true,
    priority: 'high'
  },
  {
    id: '33',
    type: 'interview',
    title: 'Rescheduled Interview - Ben Murphy',
    description: 'PE teacher interview (previously cancelled)',
    date: '2024-01-28',
    time: '11:30',
    duration: 60,
    status: 'pending',
    participants: {
      teacher: 'Ben Murphy',
      contact: 'Mike Jones (Sports Consultant)'
    },
    location: 'Payra Office',
    notes: 'Candidate missed previous appointment, needs confirmation',
    reminder: true,
    priority: 'high'
  }
] 
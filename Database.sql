USE [WebClothes]
GO
/****** Object:  Table [dbo].[Admin]    Script Date: 5/11/2021 8:44:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Admin](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](300) NULL,
	[UserName] [nvarchar](300) NULL,
	[Password] [nvarchar](300) NULL,
	[Gender] [bit] NULL,
	[Address] [nvarchar](300) NULL,
	[Email] [nvarchar](300) NULL,
	[Phone] [nvarchar](250) NULL,
	[IsAdmins] [bit] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [nvarchar](250) NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedBy] [nvarchar](250) NULL,
	[Status] [bit] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_Admin] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Banner]    Script Date: 5/11/2021 8:44:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Banner](
	[Id] [int] NOT NULL,
	[Tilte] [nvarchar](300) NULL,
	[SubTilte] [nvarchar](300) NULL,
	[Image] [nvarchar](max) NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [nvarchar](250) NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedBy] [nvarchar](250) NULL,
	[Status] [bit] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_Banner] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 5/11/2021 8:44:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[Id] [int] IDENTITY(100,1) NOT NULL,
	[Name] [nvarchar](250) NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [nvarchar](250) NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedBy] [nvarchar](50) NULL,
	[Status] [bit] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CategoryChild]    Script Date: 5/11/2021 8:44:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CategoryChild](
	[Id] [int] IDENTITY(3,3) NOT NULL,
	[Name] [nvarchar](250) NULL,
	[CategoryId] [nchar](10) NULL,
 CONSTRAINT [PK_CategoryChild] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Color]    Script Date: 5/11/2021 8:44:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Color](
	[Id] [int] IDENTITY(1,3) NOT NULL,
	[ProductDetailId] [int] NULL,
	[Name] [nvarchar](50) NULL,
 CONSTRAINT [PK_Color] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 5/11/2021 8:44:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](300) NULL,
	[UserName] [nvarchar](300) NULL,
	[Password] [nvarchar](300) NULL,
	[Gender] [bit] NULL,
	[Address] [nvarchar](300) NULL,
	[Email] [nvarchar](300) NULL,
	[Phone] [nvarchar](250) NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [nvarchar](250) NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedBy] [nvarchar](250) NULL,
	[Status] [bit] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ListImage]    Script Date: 5/11/2021 8:44:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ListImage](
	[Id] [int] IDENTITY(2,3) NOT NULL,
	[ProductDetailId] [int] NULL,
	[Image] [nvarchar](max) NULL,
 CONSTRAINT [PK_ListImage] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Order]    Script Date: 5/11/2021 8:44:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order](
	[Id] [int] NOT NULL,
	[AdminId] [int] NULL,
	[CustomerId] [int] NULL,
	[Note] [nvarchar](max) NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedBy] [nvarchar](250) NULL,
	[UpdatedDate] [datetime] NULL,
	[Status] [int] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderDetail]    Script Date: 5/11/2021 8:44:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderDetail](
	[Id] [int] NOT NULL,
	[OrderId] [int] NULL,
	[ProductId] [int] NULL,
	[Price] [decimal](18, 0) NULL,
 CONSTRAINT [PK_OrderDetail] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 5/11/2021 8:44:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[Id] [int] IDENTITY(15,1) NOT NULL,
	[Name] [nvarchar](300) NULL,
	[Code] [nvarchar](50) NULL,
	[Image] [nvarchar](max) NULL,
	[CategoryId] [int] NULL,
	[CategoryChildId] [int] NULL,
	[PriceBeforeFalling] [decimal](19, 0) NULL,
	[Price] [decimal](19, 0) NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [nvarchar](250) NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedBy] [nvarchar](250) NULL,
	[Status] [bit] NULL,
	[IsDeleted] [bit] NULL,
	[Content] [nvarchar](max) NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Size]    Script Date: 5/11/2021 8:44:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Size](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProducDetailtId] [int] NULL,
	[Size] [nchar](10) NULL,
 CONSTRAINT [PK_Size] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Admin] ([Id], [Name], [UserName], [Password], [Gender], [Address], [Email], [Phone], [IsAdmins], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted]) VALUES (2, N'Nguyen duong', N'Duong', N'12345', 1, N'Vĩnh Phúc', N'duong@gmail.com', N'0374459780', 1, CAST(N'2021-11-05T00:00:00.000' AS DateTime), N'duong', NULL, NULL, 1, 0)
GO
SET IDENTITY_INSERT [dbo].[Category] ON 

INSERT [dbo].[Category] ([Id], [Name], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted]) VALUES (100, N'Sơ mi', CAST(N'2021-11-05T00:00:00.000' AS DateTime), N'Admin', NULL, NULL, 1, 0)
INSERT [dbo].[Category] ([Id], [Name], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted]) VALUES (101, N'Quần Âu', CAST(N'2021-11-05T00:00:00.000' AS DateTime), NULL, NULL, NULL, 1, 0)
INSERT [dbo].[Category] ([Id], [Name], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted]) VALUES (102, N'Áo Polo', CAST(N'2021-11-05T00:00:00.000' AS DateTime), NULL, NULL, NULL, 1, 0)
INSERT [dbo].[Category] ([Id], [Name], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted]) VALUES (103, N'Áo nỉ', CAST(N'2021-11-05T00:00:00.000' AS DateTime), NULL, NULL, NULL, 1, 0)
INSERT [dbo].[Category] ([Id], [Name], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted]) VALUES (104, N'Denin', CAST(N'2021-11-05T00:00:00.000' AS DateTime), NULL, NULL, NULL, 1, 0)
INSERT [dbo].[Category] ([Id], [Name], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted]) VALUES (105, N'Áo Khoác', CAST(N'2021-11-05T00:00:00.000' AS DateTime), NULL, NULL, NULL, 1, 0)
INSERT [dbo].[Category] ([Id], [Name], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted]) VALUES (106, N'Phụ Kiện', CAST(N'2021-11-05T00:00:00.000' AS DateTime), NULL, NULL, NULL, 1, 0)
SET IDENTITY_INSERT [dbo].[Category] OFF
GO
SET IDENTITY_INSERT [dbo].[CategoryChild] ON 

INSERT [dbo].[CategoryChild] ([Id], [Name], [CategoryId]) VALUES (3, N'Sơ mi dài tay', N'100       ')
INSERT [dbo].[CategoryChild] ([Id], [Name], [CategoryId]) VALUES (6, N'Sơ mi cộc tay', N'100       ')
INSERT [dbo].[CategoryChild] ([Id], [Name], [CategoryId]) VALUES (9, N'Thắt lưng', N'106       ')
INSERT [dbo].[CategoryChild] ([Id], [Name], [CategoryId]) VALUES (12, N'Ví nam', N'106       ')
INSERT [dbo].[CategoryChild] ([Id], [Name], [CategoryId]) VALUES (15, N'Cà Vạt', N'106       ')
INSERT [dbo].[CategoryChild] ([Id], [Name], [CategoryId]) VALUES (18, N'Cặp da', N'106       ')
INSERT [dbo].[CategoryChild] ([Id], [Name], [CategoryId]) VALUES (21, N'Giày da', N'106       ')
INSERT [dbo].[CategoryChild] ([Id], [Name], [CategoryId]) VALUES (24, N'Vali', N'106       ')
INSERT [dbo].[CategoryChild] ([Id], [Name], [CategoryId]) VALUES (27, N'Áo khoác gió', N'105       ')
INSERT [dbo].[CategoryChild] ([Id], [Name], [CategoryId]) VALUES (30, N'Áo Khoác phao', N'105       ')
INSERT [dbo].[CategoryChild] ([Id], [Name], [CategoryId]) VALUES (33, N'Hoodile', N'105       ')
SET IDENTITY_INSERT [dbo].[CategoryChild] OFF
GO
SET IDENTITY_INSERT [dbo].[Color] ON 

INSERT [dbo].[Color] ([Id], [ProductDetailId], [Name]) VALUES (1, 15, N'Black')
INSERT [dbo].[Color] ([Id], [ProductDetailId], [Name]) VALUES (4, 15, N'Blue')
INSERT [dbo].[Color] ([Id], [ProductDetailId], [Name]) VALUES (7, 15, N'Red')
INSERT [dbo].[Color] ([Id], [ProductDetailId], [Name]) VALUES (10, 16, N'White')
INSERT [dbo].[Color] ([Id], [ProductDetailId], [Name]) VALUES (13, 16, N'Grey')
INSERT [dbo].[Color] ([Id], [ProductDetailId], [Name]) VALUES (16, 17, N'Green ')
INSERT [dbo].[Color] ([Id], [ProductDetailId], [Name]) VALUES (19, 17, N'White')
INSERT [dbo].[Color] ([Id], [ProductDetailId], [Name]) VALUES (22, 19, N'Black')
INSERT [dbo].[Color] ([Id], [ProductDetailId], [Name]) VALUES (25, 19, N'Grey')
INSERT [dbo].[Color] ([Id], [ProductDetailId], [Name]) VALUES (28, 20, N'Green')
INSERT [dbo].[Color] ([Id], [ProductDetailId], [Name]) VALUES (31, 21, N'Red')
SET IDENTITY_INSERT [dbo].[Color] OFF
GO
SET IDENTITY_INSERT [dbo].[Customer] ON 

INSERT [dbo].[Customer] ([Id], [Name], [UserName], [Password], [Gender], [Address], [Email], [Phone], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted]) VALUES (1, N'Nguyen Duc Duong', N'Duong', N'123456', 1, N'Vĩnh Phúc', N'duong@gmail.com', N'0374459780', CAST(N'2021-11-05T00:00:00.000' AS DateTime), N'duong', NULL, NULL, 1, 0)
SET IDENTITY_INSERT [dbo].[Customer] OFF
GO
SET IDENTITY_INSERT [dbo].[ListImage] ON 

INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (2, 15, N'/Content/img/somiden1.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (5, 15, N'/Content/img/somiden2.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (8, 15, N'/Content/img/somiden3.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (11, 15, N'/Content/img/somiden4.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (17, 15, N'/Content/img/somiden5.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (20, 16, N'/Content/img/somitim1.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (23, 16, N'/Content/img/somitim2.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (26, 16, N'/Content/img/somitim3.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (29, 16, N'/Content/img/somitim4.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (32, 16, N'/Content/img/somitim5.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (35, 18, N'/Content/img/somixanh1.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (38, 18, N'/Content/img/somixanh2.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (41, 18, N'/Content/img/somixanh3.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (44, 19, N'/Content/img/somicoc1.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (47, 19, N'/Content/img/somicoc2.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (50, 19, N'/Content/img/somicoc3.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (56, 19, N'/Content/img/somicoc4.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (59, 20, N'/Content/img/smcd1.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (62, 20, N'/Content/img/smcd2.jpg')
INSERT [dbo].[ListImage] ([Id], [ProductDetailId], [Image]) VALUES (65, 20, N'/Content/img/smcd3.jpg')
SET IDENTITY_INSERT [dbo].[ListImage] OFF
GO
INSERT [dbo].[Order] ([Id], [AdminId], [CustomerId], [Note], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status], [IsDeleted]) VALUES (1, 1, 1, NULL, CAST(N'2021-12-05T00:00:00.000' AS DateTime), NULL, NULL, 1, 0)
GO
SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([Id], [Name], [Code], [Image], [CategoryId], [CategoryChildId], [PriceBeforeFalling], [Price], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted], [Content]) VALUES (15, N'Áo sơ mi nam Aristino', N'ALSR04', N'/Content/img/somiden1.jpg', 100, 3, CAST(500000 AS Decimal(19, 0)), CAST(350000 AS Decimal(19, 0)), CAST(N'2021-11-05T00:00:00.000' AS DateTime), N'DUONG', NULL, NULL, 1, 0, NULL)
INSERT [dbo].[Product] ([Id], [Name], [Code], [Image], [CategoryId], [CategoryChildId], [PriceBeforeFalling], [Price], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted], [Content]) VALUES (16, N'Áo sơ mi nam Aristino dài tay', N'ALSR21', N'/Content/img/somitim1.jpg', 100, 3, NULL, CAST(400000 AS Decimal(19, 0)), CAST(N'2021-11-05T00:00:00.000' AS DateTime), N'Admin', NULL, NULL, 1, 0, NULL)
INSERT [dbo].[Product] ([Id], [Name], [Code], [Image], [CategoryId], [CategoryChildId], [PriceBeforeFalling], [Price], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted], [Content]) VALUES (17, N'Áo sơ mi nam ngắn tay Aristino ', N'ASS100S9', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, NULL)
INSERT [dbo].[Product] ([Id], [Name], [Code], [Image], [CategoryId], [CategoryChildId], [PriceBeforeFalling], [Price], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted], [Content]) VALUES (18, N'Áo sơ mi dài tay nam Aristino ', N'ALS18601', N'/Content/img/somixanh1.jpg', 100, 3, NULL, CAST(2300000 AS Decimal(19, 0)), CAST(N'2021-11-05T00:00:00.000' AS DateTime), N'Duong', NULL, NULL, 1, 0, NULL)
INSERT [dbo].[Product] ([Id], [Name], [Code], [Image], [CategoryId], [CategoryChildId], [PriceBeforeFalling], [Price], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted], [Content]) VALUES (19, N'Áo sơ mi nam ngắn tay Aristino', N'ASS131S1', N'/Content/img/somicoc1.jpg', 100, 6, NULL, CAST(4200000 AS Decimal(19, 0)), CAST(N'2021-11-05T00:00:00.000' AS DateTime), NULL, NULL, NULL, 1, 0, NULL)
INSERT [dbo].[Product] ([Id], [Name], [Code], [Image], [CategoryId], [CategoryChildId], [PriceBeforeFalling], [Price], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [Status], [IsDeleted], [Content]) VALUES (20, N'Áo sơ mi ngắn tay nam Aristino ', N'ASS188S1', N'/Content/img/smcd1.jpg', 100, 6, NULL, CAST(6900000 AS Decimal(19, 0)), CAST(N'2021-11-05T00:00:00.000' AS DateTime), NULL, NULL, NULL, 1, 0, NULL)
SET IDENTITY_INSERT [dbo].[Product] OFF
GO
SET IDENTITY_INSERT [dbo].[Size] ON 

INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (1, 15, N'S         ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (2, 15, N'M         ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (3, 15, N'L         ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (4, 15, N'XL        ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (5, 15, N'2XL       ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (6, 17, N'2XL       ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (7, 17, N'XS        ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (8, 17, N'M         ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (9, 18, N'S         ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (10, 18, N'L         ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (11, 18, N'XL        ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (12, 19, N'S         ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (13, 16, N'L         ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (14, 16, N'S         ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (15, 20, N'XL        ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (16, 21, N'M         ')
INSERT [dbo].[Size] ([Id], [ProducDetailtId], [Size]) VALUES (17, 21, N'XL        ')
SET IDENTITY_INSERT [dbo].[Size] OFF
GO

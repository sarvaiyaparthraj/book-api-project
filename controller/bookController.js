import BookStore from "../model/bookData.js";
import httpError from "../middleware/httpError.js";
import fs from "fs";

const add = async (req, res, next) => {
  try {
    const { title, author, ISBN, description, price } = req.body;

    const bookImg = req.file?.path;

    if (
      !title ||
      !author ||
      !ISBN ||
      !description ||
      price === undefined ||
      price === "" ||
      !bookImg
    ) {
      return next(
        new httpError("All book fields and a book image are required", 400),
      );
    }

    const book = await BookStore.create({
      title,
      author,
      ISBN,
      description,
      price: Number(price),
      bookImg: [bookImg],
    });

    res.status(201).json({
      success: true,
      message: "Book added successfully",
      book,
    });
  } catch (error) {
    return next(new httpError(error.message, 500));
  }
};

const getAll = async (req, res, next) => {
  try {
    const book = await BookStore.find({});

    if (!book || book.length === 0) {
      return next(new httpError("book Store data not found", 404));
    }

    return res
      .status(200)
      .json({
        success: true,
        message: "Book Store data all show",
        total: book.length,
        book,
      });
  } catch (error) {
    return next(new httpError(error.message));
  }
};

const BookFindById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await BookStore.findById(id);

    if (!book) {
      return next(new httpError("book not found", 404));
    }

    return res
      .status(200)
      .json({ success: true, message: "book detail found successfully", book });
  } catch (error) {
    return next(new httpError(error.message));
  }
};

const BookDelete = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await BookStore.findByIdAndDelete(id);

    if (!book) {
      return next(new httpError("book not found", 404));
    }

    const fileTODelete = [...book.bookImg];

    fileTODelete.forEach((file) => {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      } else {
        return next(new httpError("failed to delete file"));
      }
    });

    return res
      .status(200)
      .json({ success: true, message: "book data deleted successfully" });
  } catch (error) {
    return next(new httpError(error.message));
  }
};

const bookUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await BookStore.findById(id);

    if (!book) {
      return next(new httpError("no book found with this id", 404));
    }

    const updates = Object.keys(req.body) || null;

    const allowedFields = [
      "title",
      "author",
      "ISBN",
      "description",
      "price",
      "bookImg",
    ];
const isValidUpdates = updates.every((field) => {
    return allowedFields.includes(field);
});

if (!isValidUpdates) {
    return next(
        new httpError("Only allowed fields can be updated", 400)
    );
}
    if (req.files?.bookImg) {
      book.bookImg.forEach((file) => {
        if (fs.existsSync(file)) {
          fs.unlinkSync(file);
        }
      });

      book.bookImg = req.files?.bookImg?.map((file) => file.path) || null;
    }

    updates.forEach((update) => {
      book[update] = req.body[update];
    });

    await book.save();

    res
      .status(200)
      .json({ success: true, message: "book data update successfully", book });
  } catch (error) {
    return next(new httpError(error.message));
  }
};
export default { add, getAll, BookFindById, BookDelete, bookUpdate };

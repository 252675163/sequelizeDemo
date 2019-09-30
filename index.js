const { Sequelize, Model, DataTypes } = require('sequelize');
const { username, password, host, port, database } = require('./config.json')
const mysql2 = require('mysql2');
const Op = Sequelize.Op;
const sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect: 'mysql',
    dialectModule: mysql2
});
console.log(sequelize)
const Tranorder = sequelize.define('tranorder', {
    // attributes
    Id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    OrgId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    OrderNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Type: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    Deleted: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    CreatedTime: {
        type: Sequelize.DATE,
        allowNull: false
    },
    PayMethod: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ShouldPay: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    RealPay: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    HrDocId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    SchoolId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Creator: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Modifier: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ModifiedTime: {
        type: Sequelize.DATE,
        allowNull: false
    },
    IsConfirm: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    SalesSource: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DealDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    StuInfoId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    LastSnapshotId: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
    },
    Remain: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    Credit: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    Arrearage: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    SourceTranId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Status: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    HasConfirmedDetail: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    LessonEnrollFeetranCount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    SourceType: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    TranorderStuinfoStuname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TranorderSchoolName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TranorderHrdocName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TranorderStuinfoMaintel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TranorderStuinfoMinortel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TranorderStuinfoOthertel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TranorderStuinfoMaintelrelationship: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    TranorderStuinfoMinortelrelationship: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    TranorderStuinfoOthertelrelationship: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    ExpiryDate: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});
Tranorder.findAll({
    where: {
        CreatedTime: {
            [Op.between]: ['2019-09-26 21:00:00', '2019-09-29 14:51:16'],
        }
    },
    limit: 10
}).then((res) => {
    console.log(res)
})
const Feetran = sequelize.define('feetran', {
    // attributes
    Id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    TranType: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    StuInfoId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    UnitPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    Unit: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    Count: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    Promotion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PromotionAmount: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    OriginAmount: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    RealAmount: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    RealUnitPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    StuFeeDocId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    StuDocId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    TranOrderId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    OrgId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Comment: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CommentOuter: {
        type: Sequelize.STRING,
        allowNull: false
    },
    BeginDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    ExpiryDate: {
        type: Sequelize.DATE
        // allowNull defaults to true
    },
    Arrearage: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    ActualIncome: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    IsPackage: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    UnUseClassTimes: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    EnrollType: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    SchoolId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    LessonId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ClassId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    FeeMode: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    ClassMode: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    FeeStandardCount: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    Price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    FeeStandardId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    LessonClassID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    FeetranLessonclassName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    FeetranSchoolName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    FeetranLessonName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    FeetranClassName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Remain: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});